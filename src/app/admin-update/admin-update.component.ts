import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.scss']
})
export class AdminUpdateComponent implements OnInit {
  insertProduct = []
  message: String
  constructor(private _detailService: EventService, private _authService: AuthService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    if (this._authService.loggedInAdmin()) {
      var id = this.route.snapshot.paramMap.get('_id');
      this._detailService.getDetail(id)
        .subscribe(
          res => this.insertProduct = res,
          err => console.log(err)
        )
    } else {
      this._router.navigate(['/loginAdmin'])
    }
  }

  //start update
  update(): void {
    this._detailService.updateProduct(this.insertProduct).subscribe(
      res => this.message = res
    );
    if (this.message != "false") {
      alert("update successfully!")
      this._router.navigateByUrl('/admin')
    }
  }
  //end
}
