import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';
import { purchaseItems } from '../interface';

@Component({
  selector: 'app-purchase-item-details',
  templateUrl: './purchase-item-details.component.html',
  styleUrls: ['./purchase-item-details.component.scss']
})
export class PurchaseItemDetailsComponent implements OnInit {
  purchaseItemData: purchaseItems[] = [];
  constructor(private supplier:SupplierService) {

  }
  
  ngOnInit(): void {
    this.purchaseItemDetails();
  }

  purchaseItemDetails() {
    this.supplier.purchaseItemDetails().subscribe((result) => {
      this.purchaseItemData = result;
      console.table(this.purchaseItemData);
    })
  }

}
