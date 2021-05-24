import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectListComponent } from './custom-select-list.component';

describe('CustomSelectListComponent', () => {
  let component: CustomSelectListComponent;
  let fixture: ComponentFixture<CustomSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
