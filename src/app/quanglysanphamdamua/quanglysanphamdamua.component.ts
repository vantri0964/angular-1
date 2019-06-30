import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-quanglysanphamdamua',
  templateUrl: './quanglysanphamdamua.component.html',
  styleUrls: ['./quanglysanphamdamua.component.scss']
})
export class QuanglysanphamdamuaComponent implements OnInit {
  eventsBuy = []
  confirmCart={}
  constructor(private _authService: AuthService, private _router: Router, private _eventService: EventService) { }

  ngOnInit() {
    if (this._authService.loggedInAdmin()) {
      this._eventService.getProductXacNhan(2).subscribe(
        res => {
          this.eventsBuy = res
        },
        err => console.log(err)
      )
    } else {
      alert('Bạn cần đăng nhập!');
      this._router.navigate(['/longinadmin'])
    }
  }

}
