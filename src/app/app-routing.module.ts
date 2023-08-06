import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './pages/admin/admin-orders/admin-orders.component';
import { AuthGuard } from './services/auth-guard.service';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';

const routes: Routes = [
  // anonymouse user
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  // loger user
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate: [AuthGuard],
  },
  { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  // admin
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
