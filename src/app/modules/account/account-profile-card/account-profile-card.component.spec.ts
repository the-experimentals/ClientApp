import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfileCardComponent } from './account-profile-card.component';

describe('AccountProfileCardComponent', () => {
  let component: AccountProfileCardComponent;
  let fixture: ComponentFixture<AccountProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
