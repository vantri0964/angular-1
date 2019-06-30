import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {
  events = []
  message: String
  constructor(private _eventService: EventService, private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    if (this._authService.loggedInAdmin()) {

      this._eventService.getInfoUser()
        .subscribe(
          res => this.events = res,
          err => console.log(err)
        )
    } else {
      this._router.navigate(['/loginAdmin'])
    }
  }


  //start delete
  delete(id): void {
    if (confirm(`Are you sure you want to delete the user ${id}. This cannot be undone.`)) {
      this._eventService.getdeleteUser(id)
        .subscribe(
          res => this.message = res
        );
      this.ngOnInit();
    }
  }

}
