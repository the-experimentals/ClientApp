import { TestBed } from '@angular/core/testing';

import { CustomSelectListService } from './custom-select-list.service';

describe('CustomSelectListService', () => {
  let service: CustomSelectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomSelectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
