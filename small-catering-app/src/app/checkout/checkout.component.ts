import { Component, OnInit } from '@angular/core';
import { cart, order } from '../interface';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  totalPrice: number | undefined;
  cartData: cart[] = [];
  orderMsg: string | undefined;
  userName: string = "";
  cartResult: any;
  final: any;
  constructor(private product: ProductService, private router: Router, private userService: UserService) { }
  itemName: string = "";
  itemPrice: string = "";
  itemQuantity: string = "";
  get user(): any {
    return localStorage.getItem('user');
  }

  public rightAlign = {
    "text-align": "right",
  };

  ngOnInit(): void {
    //this.f();
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    this.userName = userData.name;

    this.product.currentCart().subscribe((result) => {

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
          this.itemName = item.name +","+ this.itemName
        }
        if(item.price) {
          this.itemPrice = item.price +","+  this.itemPrice;
        }
        if(item.quantity) {
          this.itemQuantity = item.quantity +","+ this.itemQuantity;
        }
        console.log('name',this.itemName+'price',this.itemPrice+'quantity',this.itemQuantity);
      }));


      console.warn(this.totalPrice);    
      console.table(this.cartData);  

    })

  }
  orderNow(data: { email: string, address: string, contact: string }) {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;

    // this.cartResult = JSON.stringify(this.cartData);
    // this.final = JSON.parse(this.cartResult);
    // console.log('kkkkkkkkkkkkkkkkkk',this.final);
    if (this.totalPrice) {
      let orderData = {
          ...data,
          totalPrice: this.totalPrice,
          name: this.itemName,
          price: this.itemPrice,
          quantity: this.itemQuantity,
          userId,
          id: undefined
      }
      this.cartData?.forEach((item) => {
        setTimeout(() => {
          item.id && this.product.deleteCartItems(item.id);
        }, 700)
      })

      this.product.orderNow(orderData).subscribe((result) => {
        if (result) {
          this.orderMsg = "Order has been placed";
          setTimeout(() => {
            this.orderMsg = undefined;
            this.router.navigate(['/my-orders'])
          }, 4000);

        }

      })
    }

  }
}
