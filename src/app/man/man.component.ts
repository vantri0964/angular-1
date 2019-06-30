import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss']
})
export class ManComponent implements OnInit {

  constructor(private _eventService: EventService,private _authService: AuthService) { }
  events = []
  ngOnInit() {
       this._eventService.getEventsMan()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
  }

}
