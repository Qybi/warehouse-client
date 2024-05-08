import { TestBed } from '@angular/core/testing';

import { PCService } from './pc.service';

describe('PCService', () => {
  let service: PCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
