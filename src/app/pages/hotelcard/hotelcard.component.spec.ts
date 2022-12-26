import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelcardComponent } from './hotelcard.component';

describe('HotelcardComponent', () => {
  let component: HotelcardComponent;
  let fixture: ComponentFixture<HotelcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
