import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingFinishComponent } from './onboarding-finish.component';

describe('OnboardingFinishComponent', () => {
  let component: OnboardingFinishComponent;
  let fixture: ComponentFixture<OnboardingFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingFinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
