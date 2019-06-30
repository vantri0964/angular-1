import { TestBed } from '@angular/core/testing';

import { SumService } from './sum.service';

describe('SumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SumService = TestBed.get(SumService);
    expect(service).toBeTruthy();
  });
});
