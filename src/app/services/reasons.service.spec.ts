import { TestBed } from '@angular/core/testing';

import { ReasonsService } from './reasons.service';

describe('ReasonsService', () => {
  let service: ReasonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReasonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
