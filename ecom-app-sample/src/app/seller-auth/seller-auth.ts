import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Seller } from '../services/seller';
import { signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css'
})
export class SellerAuth {
  constructor(private seller:Seller){}
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data: signUp): void {
    console.warn(data);
    this.seller.userSignUp(data);
  }
}
