import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SumService {
  private sumcount =new BehaviorSubject<String>('0');
  private events =new BehaviorSubject<any[]>([]);
  cart=this.sumcount.asObservable();
  ToEvents=this.events.asObservable();
  constructor(private _authService: AuthService, private _eventService: EventService, private _router: Router) { }
  editsumCart(newsum){
    this.sumcount.next(newsum)
  }
  editEvents(newEvent){
    this.events.next(newEvent);
  }
}
