import { TestBed } from '@angular/core/testing';

import { AccessoryService } from './accessories.service';

describe('AccessoriesService', () => {
  let service: AccessoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
