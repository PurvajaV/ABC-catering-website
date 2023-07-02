import { EventEmitter, Injectable } from '@angular/core';
import { purchaseItems, purchaseOrder, supplier, supplierCart } from '../interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  cartData = new EventEmitter<purchaseItems[] | []>();
  supplierValue: any;
  constructor(private http: HttpClient) {

  }

  supplierList() {
    return this.http.get<supplier[]>('http://localhost:3000/supplier');
  }

  supplierDetail(data: supplier) {
    this.http.get<supplier[]>(`http://localhost:3000/supplier?supplierName=${data}`,
      { observe: 'response' }
    ).subscribe((result) => {
      this.supplierValue = result;
      if (result && result.body?.length) {
        localStorage.setItem('supplierdetail', JSON.stringify(result.body[0]));
      }
    })
  }

  purchaseItemDetails() {
    return this.http.get<purchaseItems[]>('http://localhost:3000/purchaseItems');
  }

  getPurchaseItem(id: string) {
    return this.http.get<purchaseItems>(`http://localhost:3000/purchaseItems/${id}`);
  }

  addToCart(cartData: supplierCart) {
    return this.http.post('http://localhost:3000/supplierCart', cartData);
  }

  localAddToCart(data: purchaseItems) {
    let cartData = [];
    let localCart = localStorage.getItem('purchaseCartData');
    console.log('locallllllllllllllll cart', localCart )
    if (!localCart) {
      localStorage.setItem('purchaseCartData', JSON.stringify([data]));
      this.cartData.emit([data]);
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('purchaseCartData', JSON.stringify(cartData));
      this.cartData.emit(cartData);
    }
  }

  getCartList(supplierId: number) {
    return this.http
      .get<purchaseItems[]>('http://localhost:3000/supplierCart?supplierId=' + supplierId, {
        observe: 'response',
      })
      .subscribe((result) => {
        localStorage.setItem('purchaseCartData', JSON.stringify(result.body));
        console.log('localstorage purchase cart', localStorage.getItem('purchaseCartData'));
        if (result && result.body) {
          this.cartData.emit(result.body);
        }
      });
  }

  removeItemFromCart(productId: number) {
    let cartData = localStorage.getItem('purchaseCartData');
    if (cartData) {
      let items: purchaseItems[] = JSON.parse(cartData);
      items = items.filter((item: purchaseItems) => productId !== item.id);
      localStorage.setItem('purchaseCartData', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }

  removeToCart(cartId: number) {
    return this.http.delete('http://localhost:3000/supplierCart/' + cartId);
  }

  currentCart() {
    let supplierStore = localStorage.getItem('supplierdetail');
    let supplierData = supplierStore && JSON.parse(supplierStore);
    console.log('supplier service', supplierData.id);
    return this.http.get<supplierCart[]>('http://localhost:3000/supplierCart?supplierId=' + supplierData.id);
  }

  deleteCartItems(cartId: number) {
    return this.http.delete('http://localhost:3000/supplierCart/' + cartId).subscribe((result) => {
      this.cartData.emit([]);
    })
  }

  orderNow(data: any) {
    return this.http.post('http://localhost:3000/supplierOrders', data);
  }

  cancelOrder(orderId:number){
    return this.http.delete('http://localhost:3000/supplierOrders/'+orderId)
  }

  orderList() {
    let supplierStore = localStorage.getItem('supplierdetail');
    let supplierData = supplierStore && JSON.parse(supplierStore);
    return this.http.get<purchaseOrder[]>('http://localhost:3000/supplierOrders?supplierId=' + supplierData.id);
  }
}
