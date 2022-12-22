import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookhotelsComponent } from './bookhotels.component';

describe('BookhotelsComponent', () => {
  let component: BookhotelsComponent;
  let fixture: ComponentFixture<BookhotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookhotelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
