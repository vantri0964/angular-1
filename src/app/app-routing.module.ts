import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventComponent } from './special-event/special-event.component';
import { AuthGuard } from './auth.guard';
import { DetailShoeComponent } from './detail-shoe/detail-shoe.component';
import { SearchComponent } from './search/search.component';
import { ManComponent } from './man/man.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteComponent } from './delete/delete.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminInsertComponent } from './admin-insert/admin-insert.component';
import { WomanComponent } from './woman/woman.component';
import { SortASCComponent } from './sort-asc/sort-asc.component';
import { SortDESCComponent } from './sort-desc/sort-desc.component';
import { AppComponent } from './app.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { CartWasBuyComponent } from './cart-was-buy/cart-was-buy.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminUpdateUserComponent } from './admin-update-user/admin-update-user.component';
import { AdminSliderComponent } from './admin-slider/admin-slider.component';
import { AdminCommentComponent } from './admin-comment/admin-comment.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AdminSliderUpdateComponent } from './admin-slider-update/admin-slider-update.component';
import { QuanlysanphamComponent } from './quanlysanpham/quanlysanpham.component';
import { QuanglysanphamdamuaComponent } from './quanglysanphamdamua/quanglysanphamdamua.component';
import { QuanglysanphamdanggiaoComponent } from './quanglysanphamdanggiao/quanglysanphamdanggiao.component';
import { QuanglysanphamdahuyComponent } from './quanglysanphamdahuy/quanglysanphamdahuy.component';
import { ThongtinComponent } from './thongtin/thongtin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    canActivate: [AuthGuard],
    component: SpecialEventComponent

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'detailshoe/:_id',
    component: DetailShoeComponent
  },
  {
    path: 'search/:id',
    component: SearchComponent
  },

  {
    path: 'man',
    component: ManComponent
  },
  {
    path: 'woman',
    component: WomanComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'updateProduct/:_id',
    component: AdminUpdateComponent
  },
  {
    path: 'loginAdmin',
    component: LoginAdminComponent
  },
  {
    path: 'AdminUser',
    component: AdminUserComponent
  },
  {
    path: 'adminInsert',
    component: AdminInsertComponent
  },
  {
    path: 'sortASC',
    component: SortASCComponent
  },
  {
    path: 'sortDESC',
    component: SortDESCComponent
  },
  {
    path: 'shopcart',
    component: ShopCartComponent
  },
  {
    path: 'cartwasbuy',
    component: CartWasBuyComponent
  },
  {
    path: 'homeadmin',
    component: HomeAdminComponent
  },
  {
    path: 'updateuser/:_id',
    component: AdminUpdateUserComponent
  },
  {
    path: 'adminslider',
    component: AdminSliderComponent
  },
  {
    path: 'admincomment',
    component: AdminCommentComponent
  },
  {
    path: 'updateuser',
    component: UpdateUserComponent
  },
  {
    path: 'updateslider/:_id',
    component: AdminSliderUpdateComponent
  },
  {
    path: 'quanlyproduct',
    component: QuanlysanphamComponent
  },
  {
    path: 'quanlysanphamdamua',
    component: QuanglysanphamdamuaComponent
  },
  {
    path: 'quanlysanphamdanggiao',
    component: QuanglysanphamdanggiaoComponent
  },
  {
    path: 'quanlysanphamdahuy',
    component: QuanglysanphamdahuyComponent
  },
  {
    path:'thongtin',
    component:ThongtinComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
