import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-slider-update',
  templateUrl: './admin-slider-update.component.html',
  styleUrls: ['./admin-slider-update.component.scss']
})
export class AdminSliderUpdateComponent implements OnInit {
  constructor(private route: ActivatedRoute,private _service:EventService,private _authService: AuthService,private _router: Router) { }
  updateslider = []
  message: String
  ngOnInit() {
    if (this._authService.loggedInAdmin()) {
     var id = this.route.snapshot.paramMap.get('_id');
     this._service.getInfoSlider(id).subscribe(
      res=>{
        this.updateslider=res
      }
     )
     } else {
       this._router.navigate(['/loginAdmin'])
     }
  }
  //start update
  update(): void {
    this._service.updateSlider(this.updateslider).subscribe(
      res => {
        this.message = res
        if (this.message != "false") {
          alert("update successfully!")
          this._router.navigateByUrl('/adminslider')
        }
      }
    );
  }
  //end
}
