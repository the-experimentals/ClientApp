import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthVerifyAccountComponent } from './auth-verify-account.component';

describe('AuthVerifyAccountComponent', () => {
  let component: AuthVerifyAccountComponent;
  let fixture: ComponentFixture<AuthVerifyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthVerifyAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthVerifyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
