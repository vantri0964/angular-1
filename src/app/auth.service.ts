import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _loginAdminUrl = "http://localhost:3000/api/loginAdmin";
  private _checkmailUrl = "http://localhost:3000/api/checkmail/";
  constructor(private http: HttpClient, private _router: Router) { }
  //Đăng ký người dùng
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }
  //Đăng nhập người dùng
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
  //kiểm tra token
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  // get token
  getToken() {
    return localStorage.getItem('token')
  }
  // đăng xuất user
  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('iduser')
    localStorage.removeItem('nameuser')
    this._router.navigate(['/events'])
  }
  //login Admin
  loginAdmin(user) {
    return this.http.post<any>(this._loginAdminUrl, user)
  }
  //đăng xuất admin
  logoutUserAdmin() {
    localStorage.removeItem('idadmin')
    this._router.navigate(['/events'])
  }
  //kiểm tra admin
  loggedInAdmin() {
    return !!localStorage.getItem('idadmin')
  }
  //check mail register
  checkmail(id) {
    return this.http.get<any>(this._checkmailUrl + id)
  }
}
