import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { GitHubService } from '../Servicios/git-hub.service';

@Injectable({providedIn: 'root'})
export class LogingGuard 
{
  constructor(private git : GitHubService) {}
  
  canActivate() : boolean
  {
    return this.git.logueado;
  }
};

export const validacionesGuard: CanActivateFn = (route, state) => {
  return inject(LogingGuard).canActivate();
}