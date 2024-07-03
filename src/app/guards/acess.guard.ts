import { CanActivateFn } from '@angular/router';

export const acessGuard: CanActivateFn = (route, state) => {
  return true;
};
