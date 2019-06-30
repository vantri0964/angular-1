import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    if (!this._authService.loggedInAdmin()) {
      this._router.navigate(['/loginAdmin'])
    }
  }

}
