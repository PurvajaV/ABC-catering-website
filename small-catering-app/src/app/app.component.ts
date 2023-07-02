import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SVGIcon, bellIcon, cartIcon, menuIcon } from '@progress/kendo-svg-icons';
import { Router } from '@angular/router';
import { product } from './interface';
import { ProductService } from './services/product.service';
import { SupplierService } from './services/supplier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'project';
  public menuIcon: SVGIcon = menuIcon;
  public bellIcon: SVGIcon = bellIcon;
  public svgCart: SVGIcon = cartIcon;
  public kendokaAvatar =
    "https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png";
  menuType: string = 'default';
  sellerName: string = "";
  userName: string = "";
  supplierName: string = "";
  searchResult: undefined | product[];
  cartItems = 0;

  constructor(private route: Router, private product: ProductService, private supplier: SupplierService) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      console.log('val', val.url);
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerData.name;
          this.menuType = 'seller';
        }
        else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          console.log('user', userStore);
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = 'user';
          this.product.getCartList(userData.id);
        }    
        else if(localStorage.getItem('supplierdetail')) {
          let supplierStore = localStorage.getItem('supplierdetail');
          console.log('supplierdetail', supplierStore);
          let supplierData = supplierStore && JSON.parse(supplierStore);
          this.supplierName = supplierData.supplierName;
          this.menuType = 'supplierdetail';
          //this.supplier.supplierDetail(this.supplierName)
        } 
        else {
          this.menuType = 'default';
        }
      }
    });
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items) => {
      this.cartItems = items.length
    })

    let purchaseCartData = localStorage.getItem('purchaseCartData');
    if(purchaseCartData) {
      this.cartItems = JSON.parse(purchaseCartData).length
    }
    this.supplier.cartData.subscribe((item) => {
      this.cartItems = item.length;
    })
  }

  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }

  userLogout() {
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth'])
    this.product.cartData.emit([])
  }

  supplierLogout() {
    localStorage.removeItem('supplierdetail');
    this.supplier.cartData.emit([]);
    this.route.navigate(['/']);
    
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result) => {

        if (result.length > 5) {
          result.length = length
        }
        this.searchResult = result;
      })
    }
  }

  hideSearch() {
    this.searchResult = undefined
  }

  redirectToDetails(id: number) {
    this.route.navigate(['/details/' + id])
  }

  submitSearch(val: string) {
    console.warn(val)
    this.route.navigate([`search/${val}`]);
  }
}