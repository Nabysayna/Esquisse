import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCompteAccessComponent } from './table-compte-access.component';

describe('TableCompteAccessComponent', () => {
  let component: TableCompteAccessComponent;
  let fixture: ComponentFixture<TableCompteAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCompteAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCompteAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
