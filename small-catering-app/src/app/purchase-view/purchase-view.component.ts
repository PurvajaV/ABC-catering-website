import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../services/supplier.service';
import { purchaseItems, supplierCart } from '../interface';

@Component({
  selector: 'app-purchase-view',
  templateUrl: './purchase-view.component.html',
  styleUrls: ['./purchase-view.component.scss']
})
export class PurchaseViewComponent implements OnInit {
purchaseData!: purchaseItems;
productQuantity:number=1;
removeCart=false;
cartData!:purchaseItems
  constructor(private activeRoute:ActivatedRoute, private supplier: SupplierService) {}
  
  ngOnInit(): void {
    let purchaseId= this.activeRoute.snapshot.paramMap.get('id');
    console.warn(purchaseId);
    purchaseId && this.supplier.getPurchaseItem(purchaseId).subscribe((result)=> {
      this.purchaseData = result;
      console.table(this.purchaseData);
      let purchase = localStorage.getItem('purchaseCartData');
      if(purchaseId && purchase){
        let items = JSON.parse(purchase);
        items = items.filter((item:purchaseItems)=>purchaseId=== item.id.toString());
        if(items.length){
          this.removeCart=true
        }else{
          this.removeCart=false
        }
      }

      let user = localStorage.getItem('supplierdetail');
      console.log('lusu',user)
      if(user){
        let userId= user && JSON.parse(user).id;
        this.supplier.getCartList(userId);

        this.supplier.cartData.subscribe((result)=>{
          let item = result.filter((item:purchaseItems)=>purchaseId?.toString()===item.purchaseId?.toString())
       if(item.length){
        this.cartData=item[0];
        this.removeCart=true;
       }
        })
      }      
    })
  }

  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }

  addToCart() {
    if (this.purchaseData) {
      this.purchaseData.quantity = this.productQuantity;

      if (!localStorage.getItem('supplierdetail')) {
        this.supplier.localAddToCart(this.purchaseData);
        this.removeCart = true
      } else {
        let supplierDetail = localStorage.getItem('supplierdetail');
        console.log('lllllll', supplierDetail);
        let supplierId = supplierDetail && JSON.parse(supplierDetail).id;
        let cartData: supplierCart = {
          ...this.purchaseData,
          purchaseId: this.purchaseData.id,
          supplierId
        }
        console.log(cartData)
        delete cartData.id;
        this.supplier.addToCart(cartData).subscribe((result) => {
          if (result) {
            this.supplier.getCartList(supplierId);
            this.removeCart = true
          }
        })
      }
    }
  }

  removeToCart(productId:number){
    if(!localStorage.getItem('supplierdetail')){
    this.supplier.removeItemFromCart(productId)
    }else{
      console.warn("cartData", this.cartData);
      
      this.cartData && this.supplier.removeToCart(this.cartData.id)
      .subscribe((result)=>{
        let user = localStorage.getItem('supplierdetail');
        let userId= user && JSON.parse(user).id;
        this.supplier.getCartList(userId)
      })
    }
    this.removeCart=false
  }

}
