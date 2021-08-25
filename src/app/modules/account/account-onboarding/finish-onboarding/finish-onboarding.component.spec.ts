import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishOnboardingComponent } from './finish-onboarding.component';

describe('FinishOnboardingComponent', () => {
  let component: FinishOnboardingComponent;
  let fixture: ComponentFixture<FinishOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
