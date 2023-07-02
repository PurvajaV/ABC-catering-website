import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';
import { supplier } from '../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  constructor(private supplierService: SupplierService, private router: Router) {}
  public supplierList: supplier[] = [];
  // public gridData: Product[] = [
  //   {
  //     ProductID: 1,
  //     ProductName: "Chai",
  //     UnitPrice: 18,
  //     Category: {
  //       CategoryID: 1,
  //       CategoryName: "Beverages",
  //     },
  //   },
  //   {
  //     ProductID: 2,
  //     ProductName: "Chang",
  //     UnitPrice: 19,
  //     Category: {
  //       CategoryID: 1,
  //       CategoryName: "Beverages",
  //     },
  //   },
  //   {
  //     ProductID: 3,
  //     ProductName: "Aniseed Syrup",
  //     UnitPrice: 10,
  //     Category: {
  //       CategoryID: 2,
  //       CategoryName: "Condiments",
  //     },
  //   },
  // ];

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.supplierService.supplierList().subscribe((result) => {
      if (result) {
        this.supplierList = result;
      }
    });
  }

  supplierDetails(supplier: any) {
    console.log('lusu', supplier.supplierName);
    this.supplierService.supplierDetail(supplier.supplierName);
    console.log('lusu1', supplier.supplierName);
    this.router.navigateByUrl('purchase-item-details');

  }
}
