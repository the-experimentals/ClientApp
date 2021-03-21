import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionCentreDashboardComponent } from './permission-centre-dashboard.component';

describe('PermissionCentreDashboardComponent', () => {
  let component: PermissionCentreDashboardComponent;
  let fixture: ComponentFixture<PermissionCentreDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionCentreDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionCentreDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
