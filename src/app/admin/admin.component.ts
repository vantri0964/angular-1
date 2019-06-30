import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  events = []
  message: String
  insertProduct = {}
  constructor(private _eventService: EventService, private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    if (this._authService.loggedInAdmin()) {

      this._eventService.getEvents()
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
    if (confirm(`Are you sure you want to delete the product ${id}. This cannot be undone.`)) {
      this._eventService.getdelete(id)
        .subscribe(
          res => {this.message = res,
            this.ngOnInit();
          },
        );
     
    }
  }
  //end delete
}
