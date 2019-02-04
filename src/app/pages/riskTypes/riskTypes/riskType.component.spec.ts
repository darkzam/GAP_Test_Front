import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  RiskTypesComponent } from './riskType.component';

describe('RiskTypesComponent', () => {
  let component: RiskTypesComponent;
  let fixture: ComponentFixture<RiskTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
