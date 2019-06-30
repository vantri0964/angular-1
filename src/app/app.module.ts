import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventComponent } from './special-event/special-event.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth.service';
import{EventService} from './event.service';

import { AuthGuard } from './auth.guard';

import { TokenInterceptorService } from './token-interceptor.service';
import { DetailShoeComponent } from './detail-shoe/detail-shoe.component';
import { SearchComponent } from './search/search.component';
import { ManComponent } from './man/man.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { AdminComponent } from './admin/admin.component';
import { DeleteComponent } from './delete/delete.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { FooterComponent } from './footer/footer.component';
import { AdminInsertComponent } from './admin-insert/admin-insert.component';
import { WomanComponent } from './woman/woman.component';
import { SortASCComponent } from './sort-asc/sort-asc.component';
import { SortDESCComponent } from './sort-desc/sort-desc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Location, LOCATION_INITIALIZED } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CartWasBuyComponent } from './cart-was-buy/cart-was-buy.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminUpdateUserComponent } from './admin-update-user/admin-update-user.component';
import { ShoesHightComponent } from './shoes-hight/shoes-hight.component';
import { SliderComponent } from './slider/slider.component';
import { AdminSliderComponent } from './admin-slider/admin-slider.component';
import { AdminCommentComponent } from './admin-comment/admin-comment.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AdminSliderUpdateComponent } from './admin-slider-update/admin-slider-update.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { QuanlysanphamComponent } from './quanlysanpham/quanlysanpham.component';
import { QuanglysanphamdamuaComponent } from './quanglysanphamdamua/quanglysanphamdamua.component';
import { QuanglysanphamdanggiaoComponent } from './quanglysanphamdanggiao/quanglysanphamdanggiao.component';
import { QuanglysanphamdahuyComponent } from './quanglysanphamdahuy/quanglysanphamdahuy.component';
import { ThongtinComponent } from './thongtin/thongtin.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventComponent,
    DetailShoeComponent,
    SearchComponent,
    ManComponent,
    AdminComponent,
    DeleteComponent,
    AdminUpdateComponent,
    LoginAdminComponent,
    ShopCartComponent,
    AdminUserComponent,
    FooterComponent,
    AdminInsertComponent,
    WomanComponent,
    SortASCComponent,
    SortDESCComponent,
    HeaderComponent,
    CartWasBuyComponent,
    HomeAdminComponent,
    AdminUpdateUserComponent,
    ShoesHightComponent,
    SliderComponent,
    AdminSliderComponent,
    AdminCommentComponent,
    UpdateUserComponent,
    AdminSliderUpdateComponent,
    ThongkeComponent,
    QuanlysanphamComponent,
    QuanglysanphamdamuaComponent,
    QuanglysanphamdanggiaoComponent,
    QuanglysanphamdahuyComponent,
    ThongtinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,EventService,HeaderComponent,AuthGuard ,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
