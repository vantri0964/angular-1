import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  carousel=[]
  carouselActive=[]
  0:boolean=true;
  constructor(private _service:EventService) { }
  ngOnInit() {
    this._service.getCarousel().subscribe(
      res=>{
        this.carousel=res
      }
    )
    this._service.getCarouselActive().subscribe(
      res=>{
        this.carouselActive=res
      }
    )
  }

}
