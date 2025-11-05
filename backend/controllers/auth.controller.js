const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

exports.signup = async (req, res) => {
    const { username, password, email, phone } = req.body;

    // Check for existing username or email
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        return res.status(400).json({ message: 'Username or email already in use' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashed, email, phone });
    await user.save();
    res.json({ token: generateToken(user._id) });
};


exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ token: generateToken(user._id) });
};
