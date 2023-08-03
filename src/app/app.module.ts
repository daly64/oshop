import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminOrdersComponent } from './pages/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

let Material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    BrowserAnimationsModule,
    Material,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
