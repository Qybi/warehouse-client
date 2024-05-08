import { TestBed } from '@angular/core/testing';

import { PCAssignmentService } from './pcassignment.service';

describe('PCAssignmentService', () => {
  let service: PCAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PCAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
