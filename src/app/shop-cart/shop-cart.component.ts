import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Location } from '@angular/common';
import { SumService } from '../sum.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {

  constructor(private _sumservie:SumService,private _sumservice:SumService, private location: Location, private _authService: AuthService, private _router: Router, private _eventService: EventService) { }
  events = []
  eventsBuy = []
  confirmCart = {}
  arraysumcount = []
  sumcount: string
  sumCost: String
  arraysumcost = []
  listUser = []
  count: String
  note:boolean=false
  ngOnInit() {
    if (this._authService.loggedIn()) {
      this._eventService.getCart(localStorage.getItem('iduser')).subscribe(
        res =>{
          this.events = res
          if(this.events.length == 0){
            this.note=true
          }
        },
        err => console.log(err)
      )
      this._eventService.getsumCost(localStorage.getItem('iduser')).subscribe(
        res => {
          this.arraysumcost = res
          for (let a of this.arraysumcost) {
            this.sumCost = a['total']
          }
        }
      )
      this._eventService.getDetailUser(localStorage.getItem('iduser')).subscribe(
        res => {
          this.listUser = res
        }
      )
      this._sumservie.cart.subscribe(sumcount=>this.count=sumcount)
    } else {
      alert('Bạn cần đăng nhập!');
      this._router.navigate(['/login'])
    }
  }
  confirm(): void {
    this.confirmCart = { iduser: localStorage.getItem('iduser'), confirm: 1,trangthai:'đang chờ xác nhận' }
    this._eventService.updateCart(this.confirmCart).subscribe(
      res => {
       
        this._eventService.getCount(localStorage.getItem('iduser')).subscribe(
          res => {
            this.arraysumcount = res
            for (let a of this.arraysumcount) {
              this.sumcount = a['total']
            }
            this._sumservice.editsumCart(this.sumcount)
            this.ngOnInit()
          }
        )
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }
  deletecart(id): void {
    this._eventService.deleteCart(id).subscribe(
      res => {
        alert(res)
        this._eventService.getCount(localStorage.getItem('iduser')).subscribe(
          res => {
            this.arraysumcount = res
            for (let a of this.arraysumcount) {
              this.sumcount = a['total']
            }
            this._sumservice.editsumCart(this.sumcount)
            this.ngOnInit()
          }
        )
      }
    )
  }
  update(): void {
    this._eventService.updateUser(this.listUser).subscribe(
      res => {
      }
    );

  }

}
