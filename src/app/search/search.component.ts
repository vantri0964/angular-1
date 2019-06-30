import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import{ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 searchName={}
  search = []
  constructor(private _eventService: EventService,  private route:ActivatedRoute,private _authService: AuthService) { }

  ngOnInit() {
    const id=this.route.snapshot.paramMap.get('id');
    this._eventService.getSearch(id)
      .subscribe(
        res =>this.search= res,
      
        err => console.log(err)
      )
     
  }

}
