import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Seller {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient, private router: Router) {}

  userSignUp(data:signUp){
    return this.http.post('https://6929a70c9d311cddf34ab905.mockapi.io/api/seller', 
      data,
      {observe: 'response'}).subscribe((result)=>{
        console.warn(result);
        if(result){
          this.isSellerLoggedIn.next(true);
          localStorage.setItem('seller',JSON.stringify(result.body));
          this.router.navigate(['seller-home']);
        }}
      )
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
