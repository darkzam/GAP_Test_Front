import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  CoverageTypesComponent } from './coverageType.component';

describe('CoverageTypesComponent', () => {
  let component: CoverageTypesComponent;
  let fixture: ComponentFixture<CoverageTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverageTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
