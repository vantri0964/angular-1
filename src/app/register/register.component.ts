import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerUserData={}
  registerForm:FormGroup;
  constructor(private _auth: AuthService, private _router: Router) { 
    this.registerForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      address: new FormControl(null, Validators.required),
      fullname: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cfpw: new FormControl(null, this.passValidator)
    });

    this.registerForm.controls.password.valueChanges
      .subscribe(
        x => this.registerForm.controls.cfpw.updateValueAndValidity()
      );
  }
  isValid(controlName) {
    return this.registerForm.get(controlName).invalid && this.registerForm.get(controlName).touched;
  }
  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

  ngOnInit() {
  }
  registerUser(){
  

    if (this.registerForm.valid) {
      this,this._auth.checkmail(this.registerForm.get('email').value).subscribe(
        res=>{
          if(res.check==0){
            this._auth.registerUser(this.registerUserData)
            .subscribe(
              res => {
                console.log(res),
                //localStorage.setItem('token', res.token)
                this._router.navigate(['/login'])
              },
             
              err => console.log(err)
            ) 
            //end register 
          }else{
            alert('email đã tồn tại')
          }
        }
      )
    
    }
}
}
