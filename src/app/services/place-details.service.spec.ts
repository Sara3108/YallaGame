import { TestBed } from '@angular/core/testing';

import { PlaceDetailsService } from './place-details.service';

describe('PlaceDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceDetailsService = TestBed.get(PlaceDetailsService);
    expect(service).toBeTruthy();
  });
});
