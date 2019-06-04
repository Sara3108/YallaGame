import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallStarRatingComponent } from './small-star-rating.component';

describe('SmallStarRatingComponent', () => {
  let component: SmallStarRatingComponent;
  let fixture: ComponentFixture<SmallStarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallStarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
