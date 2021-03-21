import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionCenterDashboardComponent } from './permission-center-dashboard.component';

describe('PermissionCenterDashboardComponent', () => {
  let component: PermissionCenterDashboardComponent;
  let fixture: ComponentFixture<PermissionCenterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionCenterDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionCenterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
