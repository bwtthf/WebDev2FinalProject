import { TestBed } from '@angular/core/testing';

import { RandomapiService } from './randomapi.service';

describe('RandomapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomapiService = TestBed.get(RandomapiService);
    expect(service).toBeTruthy();
  });
});
