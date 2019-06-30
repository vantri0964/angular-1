import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { EventsComponent } from '../events/events.component';
import { SumService } from '../sum.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  listUser = []
  events=[]
  @Input() public sumcount: Number;
  count:String
  ngOnInit() {
    if (this._authService.loggedIn()) {
      this._eventService.getDetailUser(localStorage.getItem('iduser')).subscribe(
        res => {
          this.listUser = res
        }
      )
      this._sumservie.cart.subscribe(sumcount=>this.count=sumcount)
    }
  }

  constructor(private _sumservie:SumService, private _authService: AuthService, private _router: Router, private _eventService: EventService) {

  }
  homeEvents(){
    this._eventService.getEvents()
      .subscribe(
        res =>{ this.events = res
         this._sumservie.editEvents(this.events)
          },
        err => console.log(err)
      )
  }
  woman(){
    this._eventService.getEventsWoman()
    .subscribe(
      res =>{ this.events = res
      this._sumservie.editEvents(this.events)
      },
      err => console.log(err)
    )
  }
  man(){
    this._eventService.getEventsMan()
    .subscribe(
      res =>{ this.events = res
        this._sumservie.editEvents(this.events)
        },
      err => console.log(err)
    )
  }
  sortAsc(){
    this._eventService.getsortASC()
    .subscribe(
      res =>{ this.events = res
        this._sumservie.editEvents(this.events)
        },
      err => console.log(err)
    )
  }
  sortDesc(){
    this._eventService.getsortDESC()
    .subscribe(
      res =>{ this.events = res
        this._sumservie.editEvents(this.events)
        },
      err => console.log(err)
    )
  }
  Search(data) {
    if (data.name != '') {
      this._eventService.getSearch(data.name)
      .subscribe(
        res =>{ this.events = res
          this._sumservie.editEvents(this.events)
          
          }, 
        err => console.log(err)
      )
    } else {
      this._router.navigate(['/events'])
    }
  }
}
