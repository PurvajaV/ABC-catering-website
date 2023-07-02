import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';
import { purchaseItems, supplierCart } from '../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-checkout',
  templateUrl: './supplier-checkout.component.html',
  styleUrls: ['./supplier-checkout.component.scss']
})
export class SupplierCheckoutComponent implements OnInit {
  supplierName: string = "";
  cartData: supplierCart[] = [];
  totalPrice!: number;
  orderMsg: string = "";
  itemName: string = "";
  itemPrice: string = "";
  itemQuantity: string = "";
  constructor(private supplier: SupplierService, private router: Router) {

  }

  get supplierDetail(): any {
    return localStorage.getItem('supplierdetail');
  }

  ngOnInit(): void {
    let supplierStore = localStorage.getItem('supplierdetail');
    let supplierData = supplierStore && JSON.parse(supplierStore);
    this.supplierName = supplierData.name;

    this.supplier.currentCart().subscribe((result) => {

      let price = 0;
      this.cartData = result;
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+item.price * +item.quantity)
        }
      })
      this.totalPrice = price + (price / 10) + 100 - (price / 10);


      console.log('aaa',this.cartData.forEach((item) => {
        if(item.name) {
          this.itemName = item.name + "," + this.itemName
        }
        if(item.price) {
          this.itemPrice = item.price + "," + this.itemPrice;
        }
        if(item.quantity) {
          this.itemQuantity = item.quantity + "," + this.itemQuantity;
        }
        console.log('name',this.itemName+'price',this.itemPrice+'quantity',this.itemQuantity);
      }));


    })
  }

  orderNow(data: { address: string, contact: string }) {
    let user = localStorage.getItem('supplierdetail');
    let userId = user && JSON.parse(user).id;
    if (this.totalPrice) {
      let orderData = {
          ...data,
          totalPrice: this.totalPrice,
          name: this.itemName,
          price: this.itemPrice,
          quantity: this.itemQuantity,
          userId,
          id: undefined,
      }
      this.cartData?.forEach((item) => {
        setTimeout(() => {
          item.id && this.supplier.deleteCartItems(item.id);
        }, 700)
      })

      this.supplier.orderNow(orderData).subscribe((result) => {
        if (result) {
          this.orderMsg = "Order has been placed";
          setTimeout(() => {
            this.orderMsg = "";
            this.router.navigate(['/supplier-orders'])
          }, 4000);

        }

      })
    }

  }

}
