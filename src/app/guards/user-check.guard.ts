import { Router } from '@angular/router';

export const UserCheckGuard: CanActivateFn = (route: Router) => {
  route = new Router();
  if(false){
    route.navigate(['/cocktail/home']);
    return false;
  }
  return true;
};

type CanActivateFn = (route: Router) => {};
