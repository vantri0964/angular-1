import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-shoes-hight',
  templateUrl: './shoes-hight.component.html',
  styleUrls: ['./shoes-hight.component.scss']
})
export class ShoesHightComponent implements OnInit {

  constructor(private _eventService: EventService) { }
  _name: String
  _list = []
  prohight = []
  endproduct=[]
  skip:Number
  ngOnInit() {
    this._eventService.getCountProductCart().subscribe(
      res => {
        this._list = res
        var max = 1
        for (let a of this._list) {
          if (a['total'] > max) {
            max = a['total']
            this._name = a['_id']
          }

        }

      this._eventService.getprohight(this._name)
          .subscribe(
            res => {
              this.prohight = res
            },
            err => console.log(err)
          )
      }

    )

 this._eventService.getCountProduct().subscribe(
   res=>{
      this.skip=res-1
     this._eventService.getEndProduct(this.skip).subscribe(
        res=>{
          this.endproduct=res
        }
     )
   }
 )
  }

}
