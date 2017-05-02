import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpdvParametrageComponent } from './adminpdv-parametrage.component';

describe('AdminpdvParametrageComponent', () => {
  let component: AdminpdvParametrageComponent;
  let fixture: ComponentFixture<AdminpdvParametrageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpdvParametrageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpdvParametrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
