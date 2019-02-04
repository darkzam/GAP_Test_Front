import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoverageTypeComponent } from './newCoverageType.component';

describe('NewCoverageTypeComponent', () => {
  let component: NewCoverageTypeComponent;
  let fixture: ComponentFixture<NewCoverageTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoverageTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoverageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
