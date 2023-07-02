import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-supplier-orders',
  templateUrl: './supplier-orders.component.html',
  styleUrls: ['./supplier-orders.component.scss']
})
export class SupplierOrdersComponent implements OnInit {
  orderData: any;
  orderResult: any;
  supplierName: string = "";
  constructor(private supplier: SupplierService) {

  }
  
  ngOnInit(): void {
    this.getOrderList();
    let supplierStore = localStorage.getItem('supplierdetail');
    let supplierData = supplierStore && JSON.parse(supplierStore);
    this.supplierName = supplierData.supplierName;
  }

  cancelOrder(orderId: number | undefined) {
    orderId && this.supplier.cancelOrder(orderId).subscribe((result) => {
      if (result) {
        this.getOrderList();
      }
    })
  }

  getOrderList() {
    this.supplier.orderList().subscribe((result) => {
      this.orderData = result;
    })
  }

}
