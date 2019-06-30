import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sort-asc',
  templateUrl: './sort-asc.component.html',
  styleUrls: ['./sort-asc.component.scss']
})
export class SortASCComponent implements OnInit {

 
  events = []
  carousel=[]
  constructor(private _eventService: EventService, private route:ActivatedRoute,private _router:Router,private _authService: AuthService) { }

  ngOnInit() {
    
    this._eventService.getsortASC()
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
