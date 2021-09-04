import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingVerifyAccountComponent } from './onboarding-verify-account.component';

describe('OnboardingVerifyAccountComponent', () => {
  let component: OnboardingVerifyAccountComponent;
  let fixture: ComponentFixture<OnboardingVerifyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingVerifyAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingVerifyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
