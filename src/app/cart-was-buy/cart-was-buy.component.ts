import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-cart-was-buy',
  templateUrl: './cart-was-buy.component.html',
  styleUrls: ['./cart-was-buy.component.scss']
})
export class CartWasBuyComponent implements OnInit {
  eventsBuy = []
  confirmCart={}
 
  constructor(private _authService: AuthService, private _router: Router, private _eventService: EventService) { }

  ngOnInit() {

    if (this._authService.loggedIn()) {
      this._eventService.getCartBuy(localStorage.getItem('iduser')).subscribe(
        res => this.eventsBuy = res,
        err => console.log(err)
      )
    } else {
      alert('Bạn cần đăng nhập!');
      this._router.navigate(['/login'])
    }

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
