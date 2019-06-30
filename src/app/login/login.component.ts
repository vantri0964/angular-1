import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  user = []
  loginForm: FormGroup;
  note:String
  note1:boolean=false
  constructor(private _auth: AuthService,
    private _router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }
  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }
  ngOnInit() {
  }

  loginUser() {
    if (this.loginForm.valid) {
      this._auth.loginUser(this.loginUserData)
        .subscribe(
          res => {
            console.log('vao day'),
            localStorage.setItem('token', res.token)
            console.log('token:'+res.token)
            localStorage.setItem('iduser', res.iduser)
            localStorage.setItem('nameuser',res.nameuser)
            this._router.navigate(['/events'])
            location.reload();
            
          },
          err =>{this.note=err.error
          this.note1=true
          }
        )
    }
  }

}
