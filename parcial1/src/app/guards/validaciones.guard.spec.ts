import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validacionesGuard } from './validaciones.guard';

describe('validacionesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validacionesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
