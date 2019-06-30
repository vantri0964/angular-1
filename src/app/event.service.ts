import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/events";
  // private _specialEventsUrl = "http://localhost:3000/api/special";
  private _detailUrl = "http://localhost:3000/api/detailshoe/";
  private _searchUrl = "http://localhost:3000/api/search/";
  private _eventsManUrl = "http://localhost:3000/api/man";
  private _eventsWomanUrl = "http://localhost:3000/api/woman";
  private _deleteUrl = "http://localhost:3000/api/delete/";
  private _insertUrl = "http://localhost:3000/api/insert";
  private _updateUrl = "http://localhost:3000/api/update";
  private _carouselUrl = "http://localhost:3000/api/carousel";
  private _carouseactivelUrl = "http://localhost:3000/api/carouselActive";
  private _carouseInsertUrl = "http://localhost:3000/api/insertslider";
  private _carouseDeleteUrl = "http://localhost:3000/api/deleteslider/";
  private _carouseUpdateUrl = "http://localhost:3000/api/updateslider";
  private _carouseInfoUrl = "http://localhost:3000/api/infoslider/";
  private _infouserUrl = "http://localhost:3000/api/infouser";
  private _sortASCUrl = "http://localhost:3000/api/sortASC";
  private _sortDESCUrl = "http://localhost:3000/api/sortDESC";
  private _authorUrl = "http://localhost:3000/api/author";
  private _insertCartUrl = "http://localhost:3000/api/insertCart";
  private _countCartUrl = "http://localhost:3000/api/countcart/";
  private _shopcartUrl = "http://localhost:3000/api/shopcart/";
  private _shopcarbuytUrl = "http://localhost:3000/api/shopcartbuy/";
  private _updateCartUrl = "http://localhost:3000/api/updatecart";
  private _commentUsertUrl = "http://localhost:3000/api/insertComment";
  private _deleteCartUrl = "http://localhost:3000/api/deleteCart/"
  private _sumCostCartUrl = "http://localhost:3000/api/sumcost/"
  private _detailUserUrl = "http://localhost:3000/api/detailUser/"
  private _deleteUserUrl = "http://localhost:3000/api/deleteUser/";
  private _updateuserUrl = "http://localhost:3000/api/updateuser";
  private _countproductUrl = "http://localhost:3000/api/sumcountproduct";
  private _prohightUrl = "http://localhost:3000/api/producthight/";
  private _countAllProductUrl = "http://localhost:3000/api/countallproduct";
  private _endProductUrl = "http://localhost:3000/api/endproduct/";
  private _commentList = "http://localhost:3000/api/commentList"
  private _deletecommentUrl = "http://localhost:3000/api/deletecomment/"
  private _productxacnhan = "http://localhost:3000/api/productxacnhan/";//dùng để gét sản phẩm đang chờ xác nhận,...
  private _xacnhanadmin = "http://localhost:3000/api/xacnhanadmin";//dùng để xác nhận 1 thành 2
  private _kiemtrasanphamUrl = "http://localhost:3000/api/kiemtrasanpham"
  private _updatesanphamdatontaiUrl = "http://localhost:3000/api/updatesanphamdatontai"
  private _soluongsanphamdaco = "http://localhost:3000/api/tinhsoluongsanphamdaco"
  //list slider
  private _listslider = "http://localhost:3000/api/listslider"
  private _Insertlistslider = "http://localhost:3000/api/insertListSlider"
  private _deletelistslider = "http://localhost:3000/api/deleteListSlider/"
  private _countslider = "http://localhost:3000/api/countslider"
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  //Hiển thị sản phẩm trang chủ 
  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }

  // getSpecialEvents() {
  //   return this.http.get<any>(this._specialEventsUrl)
  // }
  //Chi tiết sản phẩm
  getDetail(id) {
    return this.http.get<any>(this._detailUrl + id)
  }
  //Tìm kiếm sản phẩm
  getSearch(id) {
    return this.http.get<any>(this._searchUrl + id)
  }
  //Hiển thị sản phẩm nam
  getEventsMan() {
    return this.http.get<any>(this._eventsManUrl)
  }
  //Hiển thị sản phẩm nữ
  getEventsWoman() {
    return this.http.get<any>(this._eventsWomanUrl)
  }
  //Xóa sản phẩm
  getdelete(id) {
    return this.http.delete<any>(this._deleteUrl + id)
  }
  //Thêm sản phẩm
  insertProduct(product) {
    return this.http.post<any>(this._insertUrl, product)
  }
  //Cập nhật sản phẩm
  updateProduct(product) {
    return this.http.put<any>(this._updateUrl, product)
  }
  //Hiển thị slider
  getCarousel() {
    return this.http.get<any>(this._carouselUrl)
  }
  //Hiển thị slider active
  getCarouselActive() {
    return this.http.get<any>(this._carouseactivelUrl)
  }
  //Xóa slider
  getdeleteSlider(id) {
    return this.http.delete<any>(this._carouseDeleteUrl + id)
  }
  //Thêm slider
  insertSlider(product) {
    return this.http.post<any>(this._carouseInsertUrl, product)
  }
  //Cập nhật slider
  updateSlider(product) {
    return this.http.put<any>(this._carouseUpdateUrl, product)
  }
  //Hiển thị thông tin slider
  getInfoSlider(id) {
    return this.http.get<any>(this._carouseInfoUrl + id)
  }
  //Hiển thị thông tin người dùng
  getInfoUser() {
    return this.http.get<any>(this._infouserUrl)
  }
  //Sắp sếp sản phẩm giảm dấn
  getsortASC() {
    return this.http.get<any>(this._sortASCUrl)
  }
  //sắp sếp sản phẩm tăng dần
  getsortDESC() {
    return this.http.get<any>(this._sortDESCUrl)
  }
  //Hiển thị thông tin của admin websize
  getAuthor() {
    return this.http.get<any>(this._authorUrl)
  }
  //Thềm giỏ hàng
  insertCart(cart) {
    return this.http.post<any>(this._insertCartUrl, cart)
  }
  //Số lương giỏ hàng
  getCount(id) {
    return this.http.get<any>(this._countCartUrl + id)
  }
  //Hiển thị giỏ hàng theo id
  getCart(id) {
    return this.http.get<any>(this._shopcartUrl + id)
  }
  //Hiển thị giỏ hàng đã mua
  getCartBuy(id) {
    return this.http.get<any>(this._shopcarbuytUrl + id)
  }
  //Cập nhật giỏ hàng từ thêm san mua
  updateCart(product) {
    return this.http.put<any>(this._updateCartUrl, product)
  }
  //Nhận xét của người dùng
  commentUser(comment) {
    return this.http.post<any>(this._commentUsertUrl, comment)
  }
  //Xóa giỏ hàng
  deleteCart(id) {
    return this.http.delete<any>(this._deleteCartUrl + id)
  }
  //Tổng tiền trong giỏ hàng
  getsumCost(id) {
    return this.http.get<any>(this._sumCostCartUrl + id)
  }
  //Chi tiết người dùng
  getDetailUser(id) {
    return this.http.get<any>(this._detailUserUrl + id)
  }
  //Xóa người dùng
  getdeleteUser(id) {
    return this.http.delete<any>(this._deleteUserUrl + id)
  }
  //Cập nhật người dùng
  updateUser(user) {
    return this.http.put<any>(this._updateuserUrl, user)
  }
  //Hiển thị số lượng giỏ hàng
  getCountProductCart() {
    return this.http.get<any>(this._countproductUrl)
  }
  //Hiển thị sản phẩm mua nhiều
  getprohight(id) {
    return this.http.get<any>(this._prohightUrl + id)
  }
  getCountProduct() {
    return this.http.get<any>(this._countAllProductUrl)
  }
  //Hiển thị sản phẩm mới nhất
  getEndProduct(id) {
    return this.http.get<any>(this._endProductUrl + id)
  }
  //Hiển thị các nhận xét của người dùng
  getCommentList() {
    return this.http.get<any>(this._commentList)
  }
  //Xóa nhận xét
  getdeletecomment(id) {
    return this.http.delete<any>(this._deletecommentUrl + id)
  }
  // product xác nhận
  getProductXacNhan(id) {
    return this.http.get<any>(this._productxacnhan + id)
  }
  //xác nhận 1 thành 2
  xacnhanadmin(product) {
    return this.http.put<any>(this._xacnhanadmin, product)
  }
  kiemtrasanphamdathem(cart) {
    return this.http.put<any>(this._kiemtrasanphamUrl, cart)
  }
  //trong event component
  updatesanphamdatontai(cart) {
    return this.http.put<any>(this._updatesanphamdatontaiUrl, cart)
  }
  //tính so luong san pham hien dang co
  tinhsoluongsanphamdangco(cart) {
    return this.http.put<any>(this._soluongsanphamdaco, cart)
  }
  //list slider
  getListSlidr() {
    return this.http.get<any>(this._listslider)
  }
  //Xóa  list slider
  getdeleteListSlider(id) {
    return this.http.delete<any>(this._deletelistslider + id)
  }
  //Thêm list slider
  insertListSlider(product) {
    return this.http.post<any>(this._Insertlistslider, product)
  }
  //list slider
  getCountSlider() {
    return this.http.get<any>(this._countslider)
  }
}
