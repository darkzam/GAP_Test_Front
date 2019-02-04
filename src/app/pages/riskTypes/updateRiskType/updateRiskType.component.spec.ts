import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRiskTypeComponent } from './updateRiskType.component';

describe('UpdateRiskTypeComponent', () => {
  let component: UpdateRiskTypeComponent;
  let fixture: ComponentFixture<UpdateRiskTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRiskTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRiskTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
