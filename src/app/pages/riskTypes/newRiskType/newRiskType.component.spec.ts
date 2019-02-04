import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRiskTypeComponent } from './newRiskType.component';

describe('NewRiskTypeComponent', () => {
  let component: NewRiskTypeComponent;
  let fixture: ComponentFixture<NewRiskTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRiskTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRiskTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
