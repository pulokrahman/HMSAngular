import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCreateComponent } from './interview-create.component';

describe('InterviewCreateComponent', () => {
  let component: InterviewCreateComponent;
  let fixture: ComponentFixture<InterviewCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewCreateComponent]
    });
    fixture = TestBed.createComponent(InterviewCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
