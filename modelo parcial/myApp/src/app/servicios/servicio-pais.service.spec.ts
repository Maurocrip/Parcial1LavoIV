import { TestBed } from '@angular/core/testing';

import { ServicioPaisService } from './servicio-pais.service';

describe('ServicioPaisService', () => {
  let service: ServicioPaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
