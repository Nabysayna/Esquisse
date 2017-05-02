import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpdvDashbaordMorrisComponent } from './adminpdv-dashbaord-morris.component';

describe('AdminpdvDashbaordMorrisComponent', () => {
  let component: AdminpdvDashbaordMorrisComponent;
  let fixture: ComponentFixture<AdminpdvDashbaordMorrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpdvDashbaordMorrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpdvDashbaordMorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
