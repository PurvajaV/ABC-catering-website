import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent {
  orderData: any;
  orderResult: any;
  userName: string = ""
 
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    this.userName = userData.name;
    this.getOrderList();
  }

  cancelOrder(orderId: number | undefined) {
    orderId && this.product.cancelOrder(orderId).subscribe((result) => {
      if (result) {
        this.getOrderList();
      }
    })
  }

  getOrderList() {
    this.product.orderList().subscribe((result) => {
      this.orderData = result;
    })
  }
}
