import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { AdminOrdersComponent } from './pages/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  // anonymouse user
  { path: '', component: HomeComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  // loger user
  {
    path: 'check-out',
    component: CheckOutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'my-orders',
    component: MyOrdersComponent,
    canActivate: [authGuard],
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate: [authGuard],
  },
  // admin
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [adminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
