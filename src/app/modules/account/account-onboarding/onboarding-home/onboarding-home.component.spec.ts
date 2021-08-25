import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingHomeComponent } from './onboarding-home.component';

describe('OnboardingHomeComponent', () => {
  let component: OnboardingHomeComponent;
  let fixture: ComponentFixture<OnboardingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
