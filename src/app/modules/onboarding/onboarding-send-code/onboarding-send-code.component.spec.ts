import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingSendCodeComponent } from './onboarding-send-code.component';

describe('OnboardingSendCodeComponent', () => {
  let component: OnboardingSendCodeComponent;
  let fixture: ComponentFixture<OnboardingSendCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingSendCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingSendCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
