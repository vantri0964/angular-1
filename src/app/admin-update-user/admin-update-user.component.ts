import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-user',
  templateUrl: './admin-update-user.component.html',
  styleUrls: ['./admin-update-user.component.scss']
})
export class AdminUpdateUserComponent implements OnInit {
  insertUser = []
  message: String
  constructor(private _detailService: EventService, private _authService: AuthService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    if (this._authService.loggedInAdmin()) {
      var id = this.route.snapshot.paramMap.get('_id');
      this._detailService.getDetailUser(id)
        .subscribe(
          res => this.insertUser = res,
          err => console.log(err)
        )
    } else {
      this._router.navigate(['/loginAdmin'])
    }
  }

  
  update(): void {
    this._detailService.updateUser(this.insertUser).subscribe(
      res => {
        this.message = res
        if (this.message != "false") {
          alert("update successfully!")
          this._router.navigateByUrl('/AdminUser')
        }
      }
    );
  }

}
