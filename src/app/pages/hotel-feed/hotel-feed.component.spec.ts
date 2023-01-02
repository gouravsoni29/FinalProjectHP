import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFeedComponent } from './hotel-feed.component';

describe('HotelFeedComponent', () => {
  let component: HotelFeedComponent;
  let fixture: ComponentFixture<HotelFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
