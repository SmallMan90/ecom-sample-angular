import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Seller } from './services/seller';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private sellerService: Seller) { }

  canActivate(): Observable<boolean> | Promise<boolean> |boolean {
    if (localStorage.getItem('seller')) {
      return true;
    }
    return this.sellerService.isSellerLoggedIn;
  }
}