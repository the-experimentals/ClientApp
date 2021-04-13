import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNewProfileComponent } from './account-new-profile.component';

describe('AccountNewProfileComponent', () => {
  let component: AccountNewProfileComponent;
  let fixture: ComponentFixture<AccountNewProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountNewProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
