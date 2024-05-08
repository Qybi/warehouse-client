import { TestBed } from '@angular/core/testing';

import { AccessoryAssignmentService } from './accessory-assignment.service';

describe('AccessoryAssignmentService', () => {
  let service: AccessoryAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessoryAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
