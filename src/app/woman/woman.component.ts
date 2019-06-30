import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.scss']
})
export class WomanComponent implements OnInit {

  constructor(private _eventService: EventService,private _authService: AuthService) { }
  events = []
  ngOnInit() {
       this._eventService.getEventsWoman()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
  }
}
