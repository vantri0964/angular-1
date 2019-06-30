import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  loginUserData = {}
  constructor(private _auth: AuthService,
    private _router: Router) { }
    ngOnInit() {
    }
  loginUserAdmin () {
    this._auth.loginAdmin(this.loginUserData)
    .subscribe(
      res => {
        console.log(res),
        
        localStorage.setItem('idadmin', res.idadmin)
       this._router.navigate(['/homeadmin'])
      },
      err => console.log(err)
    ) 
    }
}
