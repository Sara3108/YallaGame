import { TestBed } from '@angular/core/testing';

import { PlaceLocationService } from './place-location.service';

describe('PlaceLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceLocationService = TestBed.get(PlaceLocationService);
    expect(service).toBeTruthy();
  });
});
