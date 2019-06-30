import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-comment',
  templateUrl: './admin-comment.component.html',
  styleUrls: ['./admin-comment.component.scss']
})
export class AdminCommentComponent implements OnInit {
  listcomment=[]
  message:String
  constructor(private _service:EventService,private _authService: AuthService,private _router: Router) { }

  ngOnInit() {
    if (this._authService.loggedInAdmin()) {
      this._service.getCommentList().subscribe(
       res=>{
         this.listcomment=res
       }
      )
 
     } else {
       this._router.navigate(['/loginAdmin'])
     }
  }
  //start
  delete(id): void {
    if (confirm(`Are you sure you want to delete the comment ${id}. This cannot be undone.`)) {
      this._service.getdeletecomment(id)
        .subscribe(
          res => {
            this.message = res,
            this.ngOnInit()
          }
        );
     
    }
  }
  //end

}
