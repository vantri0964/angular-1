import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { SearchComponent } from './search/search.component';
import { EventService } from './event.service';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { SumService } from './sum.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shoe';
  arraysumcount = []
  //Hiển thị số lượng giỏ hàng--chưa dùng tới
  public sumcount: Observable<Number>;


  constructor(private _sumservice:SumService, private _authService: AuthService, private _eventService: EventService, private _router: Router) {
    if (this._authService.loggedIn()) {

      this._eventService.getCount(localStorage.getItem('iduser')).subscribe(
        res => {
          this.arraysumcount = res
          for (let a of this.arraysumcount) {
            this.sumcount = a['total']
          }
          this._sumservice.editsumCart(this.sumcount)
        }

      )
    }

  }


}
