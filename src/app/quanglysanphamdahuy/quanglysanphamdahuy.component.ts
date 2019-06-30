import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-quanglysanphamdahuy',
  templateUrl: './quanglysanphamdahuy.component.html',
  styleUrls: ['./quanglysanphamdahuy.component.scss']
})
export class QuanglysanphamdahuyComponent implements OnInit {

  eventsBuy = []
  confirmCart={}
  constructor(private _authService: AuthService, private _router: Router, private _eventService: EventService) { }

  ngOnInit() {
    if (this._authService.loggedInAdmin()) {
      this._eventService.getProductXacNhan(3).subscribe(
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
