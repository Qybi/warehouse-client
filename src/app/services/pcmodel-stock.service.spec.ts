import { TestBed } from '@angular/core/testing';

import { PCModelStockService } from './pcmodel-stock.service';

describe('PCModelStockService', () => {
  let service: PCModelStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PCModelStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
