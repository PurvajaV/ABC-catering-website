import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';
import { priceSummary, supplierCart } from '../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-cart',
  templateUrl: './supplier-cart.component.html',
  styleUrls: ['./supplier-cart.component.scss']
})
export class SupplierCartComponent implements OnInit {

  supplierCartData: supplierCart[] = [];
  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }
  constructor(private supplier: SupplierService, private router: Router) {

  }

  ngOnInit(): void {
    this.loadDetails();
  }

  removeToCart(cartId:number|undefined){
    cartId && this.supplierCartData && this.supplier.removeToCart(cartId)
    .subscribe((result)=>{
      this.loadDetails();
    })
  }

  loadDetails() {
    this.supplier.currentCart().subscribe((result) => {
      this.supplierCartData = result;
      console.warn(this.supplierCartData);
      let price = 0;
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+item.price * +item.quantity)
        }
      })
      this.priceSummary.price = price;
      this.priceSummary.discount = price / 10;
      this.priceSummary.tax = price / 10;
      this.priceSummary.delivery = 100;
      this.priceSummary.total = price + (price / 10) + 100 - (price / 10);

      if (!this.supplierCartData.length) {
        this.router.navigate(['/purchase-item-details'])
      }
    })
  }

  
  checkout() {
    this.router.navigate(['/supplier-checkout']);
  }

}
