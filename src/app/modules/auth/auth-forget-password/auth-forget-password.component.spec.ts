import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgetPasswordComponent } from './auth-forget-password.component';

describe('AuthForgetPasswordComponent', () => {
  let component: AuthForgetPasswordComponent;
  let fixture: ComponentFixture<AuthForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthForgetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
