import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChangerAccessUserComponent } from './form-changer-access-user.component';

describe('FormChangerAccessUserComponent', () => {
  let component: FormChangerAccessUserComponent;
  let fixture: ComponentFixture<FormChangerAccessUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormChangerAccessUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChangerAccessUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
