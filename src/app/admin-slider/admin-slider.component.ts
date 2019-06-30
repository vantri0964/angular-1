import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-slider',
  templateUrl: './admin-slider.component.html',
  styleUrls: ['./admin-slider.component.scss']
})
export class AdminSliderComponent implements OnInit {
  listslider=[]
  message: String
  insertProduct = {}
  carouselActive=[]
  updateslider=[]
  danhsachslider=[]
  insertListSlider={}
  img1:File=null
  check:boolean=false
  constructor(private _service:EventService,private _authService: AuthService,private _router: Router) { }

  ngOnInit() {
    if (this._authService.loggedInAdmin()) {
     this._service.getCarousel().subscribe(
      res=>{
        this.listslider=res
      }
     )
     this._service.getCarouselActive().subscribe(
      res=>{
        this.carouselActive=res
      }
    )
    this._service.getListSlidr().subscribe(
      res=>{
        this.danhsachslider=res
      }
    )
    this._service.getCountSlider().subscribe(
      res=>{
       if(res==3){
         this.check=true
       }else{
         this.check=false
       }
      }
    )
    } else {
      this._router.navigate(['/loginAdmin'])
    }
  }
  onFileChanged(event) {
    this.img1 =<File> event.target.files[0] 
    this.insertProduct['img']=this.img1.name;
 }
  //start insert list
  insertList(): void {
    this._service.insertListSlider(this.insertProduct).subscribe(
      res => {
      this.message = res
        alert(this.message)
        this.ngOnInit()
      }
    );
  }
  //end
  //delete
  delete(id): void {
    if (confirm(`Are you sure you want to delete the slider ${id}. This cannot be undone.`)) {
      this._service.getdeleteSlider(id)
        .subscribe(
          res => {this.message = res
            this.ngOnInit();
          },
        );
      
    }
  }
  //end
  insert(img,title,description):void{
    this.insertListSlider={img:img,title:title,description:description}
    this._service.insertSlider(this.insertListSlider).subscribe(
      res => {
      this.message = res
        alert(this.message)
        this.ngOnInit()
      }
    );
  }
  deleteList(id): void {
    if (confirm(`Are you sure you want to delete the slider ${id}. This cannot be undone.`)) {
      this._service.getdeleteListSlider(id)
        .subscribe(
          res => {this.message = res
            this.ngOnInit();
          },
        );
      
    }
  }

}
