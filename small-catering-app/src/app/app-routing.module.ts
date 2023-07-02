import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SupplierComponent } from './supplier/supplier.component';
import { PurchaseItemDetailsComponent } from './purchase-item-details/purchase-item-details.component';
import { PurchaseViewComponent } from './purchase-view/purchase-view.component';
import { SupplierCartComponent } from './supplier-cart/supplier-cart.component';
import { SupplierCheckoutComponent } from './supplier-checkout/supplier-checkout.component';
import { SupplierOrdersComponent } from './supplier-orders/supplier-orders.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: SellerAuthComponent,
    path: 'seller-auth',
  },
  {
    component:SellerHomeComponent,
    path:'seller-home',
    //canActivate:[AuthGuard]
  },{
    component:SellerAddProductComponent,
    path:'seller-add-product',
    //canActivate:[AuthGuard]
  },
  {
    component:SellerUpdateProductComponent,
    path:'seller-update-product/:id',
    //canActivate:[AuthGuard]
  },
  {
    component: SearchComponent,
    path:'search/:query'
  },
  {
    component:ProductDetailsComponent,
    path:'details/:productId'
  },
  {
    component:UserAuthComponent,
    path:'user-auth'
  },
  {
    component:CartPageComponent,
    path:'cart-page'
  },
  {
    component:CheckoutComponent,
    path:'checkout'
  },
  {
    component:MyOrdersComponent,
    path:'my-orders'
  },
  {
    component:SupplierComponent,
    path: 'supplier'
  },
  {
    component: PurchaseItemDetailsComponent,
    path: 'purchase-item-details'
  },
  {
    component:PurchaseViewComponent,
    path:'purchase-view/:id'
  },
  {
    component:SupplierCartComponent,
    path:'purchase-cart-page'
  },
  {
    component:SupplierCheckoutComponent,
    path:'supplier-checkout'
  },
  {
    component: SupplierOrdersComponent,
    path: 'supplier-orders'
  },
  {
    component: ChartComponent,
    path: 'reports'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
