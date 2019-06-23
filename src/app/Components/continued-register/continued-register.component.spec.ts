import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuedRegisterComponent } from './continued-register.component';

describe('ContinuedRegisterComponent', () => {
  let component: ContinuedRegisterComponent;
  let fixture: ComponentFixture<ContinuedRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuedRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuedRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
