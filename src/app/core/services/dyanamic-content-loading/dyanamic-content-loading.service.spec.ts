import { TestBed } from '@angular/core/testing';

import { DyanamicContentLoadingService } from './dyanamic-content-loading.service';

describe('DyanamicContentLoadingService', () => {
  let service: DyanamicContentLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DyanamicContentLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
