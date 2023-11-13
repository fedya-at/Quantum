import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
export const loginguardGuard: CanActivateFn = (route, state) => {
  const auth:AuthService=TestBed.inject(AuthService);
  const router: Router = TestBed.inject(Router);
  if(auth.LoggedIn()==true){
    return true;
  }else{
    router.navigate(['/a/login']);
    return false;
  }
};
