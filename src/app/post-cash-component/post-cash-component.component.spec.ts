import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCashComponentComponent } from './post-cash-component.component';

describe('PostCashComponentComponent', () => {
  let component: PostCashComponentComponent;
  let fixture: ComponentFixture<PostCashComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCashComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCashComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
