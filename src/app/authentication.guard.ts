import { inject } from '@angular/core';
import { CanActivateFn, RouteConfigLoadEnd, Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router)
  if(localStorage.getItem("user")){
    return true;
  }else{
    _router.navigate(['login'])
    return false;
  }
};
