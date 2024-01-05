import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { GitHubService } from '../Servicios/git-hub.service';


@Injectable({providedIn: 'root'})
export class AdminGuard 
{
  constructor(private git : GitHubService,) {}
  
  canActivate() : boolean
  {
    return this.git.personaLogueada=="admin";
  }
  canDesactivate() : boolean
  {
    return this.git.acepto;
  }
};

export const rolAdminGuard: CanActivateFn = (route, state) => {
  return inject(AdminGuard).canActivate();
}

export const salirTerminosGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return inject(AdminGuard).canDesactivate();
};
