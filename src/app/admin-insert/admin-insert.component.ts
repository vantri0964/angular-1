import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-admin-insert',
  templateUrl: './admin-insert.component.html',
  styleUrls: ['./admin-insert.component.scss']
})
export class AdminInsertComponent implements OnInit {
  message: String
  insertProduct = {}
  img1:File=null
  constructor(private _eventService: EventService, private _router: Router, private _authService: AuthService) { }
  onFileChanged(event) {
     this.img1 =<File> event.target.files[0] 
     this.insertProduct['img']=this.img1.name;
  }
  ngOnInit() {
    if (!this._authService.loggedInAdmin()) {
      this._router.navigate(['/loginAdmin'])
    }
  }
 
  //start insert
  insert(): void {
    this._eventService.insertProduct(this.insertProduct).subscribe(
      res => {
      this.message = res
        alert(this.message)
      }
    );
    this._router.navigate(['/admin'])
  }
  //end
 
}
