import { TestBed } from '@angular/core/testing';

import { AccessoriesService } from './accessories.service';

describe('AccessoriesService', () => {
  let service: AccessoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
