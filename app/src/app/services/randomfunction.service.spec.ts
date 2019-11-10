import { TestBed } from '@angular/core/testing';

import { RandomfunctionService } from './randomfunction.service';

describe('RandomfunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomfunctionService = TestBed.get(RandomfunctionService);
    expect(service).toBeTruthy();
  });
});
