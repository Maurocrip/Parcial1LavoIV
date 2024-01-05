import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rolAdminGuard } from './rol-admin.guard';

describe('rolAdminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rolAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
