import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceInfoEditComponent } from './place-info-edit.component';

describe('PlaceInfoEditComponent', () => {
  let component: PlaceInfoEditComponent;
  let fixture: ComponentFixture<PlaceInfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceInfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
