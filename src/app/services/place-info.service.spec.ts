import { TestBed } from '@angular/core/testing';

import { PlaceInfoService } from './place-info.service';

describe('PlaceInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceInfoService = TestBed.get(PlaceInfoService);
    expect(service).toBeTruthy();
  });
});
