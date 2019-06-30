import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sort-desc',
  templateUrl: './sort-desc.component.html',
  styleUrls: ['./sort-desc.component.scss']
})
export class SortDESCComponent implements OnInit {

  
  events = []
  carousel=[]
  constructor(private _eventService: EventService, private route:ActivatedRoute,private _router:Router,private _authService: AuthService) { }

  ngOnInit() {
    
    this._eventService.getsortDESC()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
      
      this._eventService.getCarousel()
      .subscribe(
        res => this.carousel = res,
        err =>console.log(err)
      )
   
  }
}
