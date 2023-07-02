import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from "@progress/kendo-angular-indicators";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { PopupModule } from '@progress/kendo-angular-popup';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { SupplierComponent } from './supplier/supplier.component';
import { PurchaseItemDetailsComponent } from './purchase-item-details/purchase-item-details.component';
import { PurchaseViewComponent } from './purchase-view/purchase-view.component';
import { SupplierCartComponent } from './supplier-cart/supplier-cart.component';
import { SupplierCheckoutComponent } from './supplier-checkout/supplier-checkout.component';
import { SupplierOrdersComponent } from './supplier-orders/supplier-orders.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [
    AppComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    HomeComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartPageComponent,
    UserAuthComponent,
    CheckoutComponent,
    MyOrdersComponent,
    SupplierComponent,
    PurchaseItemDetailsComponent,
    PurchaseViewComponent,
    SupplierCartComponent,
    SupplierCheckoutComponent,
    SupplierOrdersComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    GridModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    IndicatorsModule,
    IconsModule,
    NavigationModule,
    ButtonsModule,
    PopupModule,
    DropDownListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule,
    InputsModule,
    FontAwesomeModule,
    PDFExportModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
