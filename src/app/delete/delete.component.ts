import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private _eventService: EventService,private _router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
      const id=this.route.snapshot.paramMap.get('id');
        this._eventService.getdelete(id);
        this._router.navigate(['/admin'])

  }

}
