import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoverageTypeComponent } from './updateCoverageType.component';

describe('UpdateCoverageTypeComponent', () => {
  let component: UpdateCoverageTypeComponent;
  let fixture: ComponentFixture<UpdateCoverageTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCoverageTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCoverageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
