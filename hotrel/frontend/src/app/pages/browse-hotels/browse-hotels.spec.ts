import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowseHotels } from './browse-hotels';

describe('BrowseHotels', () => {
    let component: BrowseHotels;
    let fixture: ComponentFixture<BrowseHotels>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowseHotels]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BrowseHotels);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
