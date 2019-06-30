import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-quanglysanphamdanggiao',
  templateUrl: './quanglysanphamdanggiao.component.html',
  styleUrls: ['./quanglysanphamdanggiao.component.scss']
})
export class QuanglysanphamdanggiaoComponent implements OnInit {
  eventsBuy = []
  confirmCart={}
  constructor(private _authService: AuthService, private _router: Router, private _eventService: EventService) { }

  ngOnInit() {
    if (this._authService.loggedInAdmin()) {
      this._eventService.getProductXacNhan(4).subscribe(
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
  xacnhan(id){
    this.confirmCart = { _id: id, confirm: 2,trangthai:'đã giao' }
    this._eventService.xacnhanadmin(this.confirmCart).subscribe(
      res => {
       
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }
  huy(id){
    this.confirmCart = { _id: id, confirm: 3,trangthai:'đã hủy' }
    this._eventService.xacnhanadmin(this.confirmCart).subscribe(
      res => {
       
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }

}
