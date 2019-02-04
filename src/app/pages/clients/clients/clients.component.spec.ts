import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  ClientssComponent } from './clients.component';

describe('ClientssComponent', () => {
  let component: ClientssComponent;
  let fixture: ComponentFixture<ClientssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
