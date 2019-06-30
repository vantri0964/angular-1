import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
import { HeaderComponent } from '../header/header.component';
import { SumService } from '../sum.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit{
  listUser: any[];
  count: string;
  Search(data: any): void {
    throw new Error("Method not implemented.");
  }

  events = []
  carousel = []
  arraysumcount = []
  sumcount: string
  checkcart={}
  insertCart = {}
  crtime: Number
  message: String
  checksoluong:Number
  updatecountcart={}
  sldc:any
  listsoluongdaco=[]
  constructor(private _sumservice:SumService, private _eventService: EventService,private _header:HeaderComponent, private route: ActivatedRoute, private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    //
    this._eventService.getEvents()
      .subscribe(
        res =>{ this.events = res
          },
        err => console.log(err)
      )

    this._sumservice.ToEvents.subscribe(events=>this.events=events)
    if (this._authService.loggedIn()) {

      this._eventService.getCount(localStorage.getItem('iduser')).subscribe(
        res => {
          this.arraysumcount = res
          for (let a of this.arraysumcount) {
            this.sumcount = a['total']
          }
          this._sumservice.editsumCart(this.sumcount)
        }

      )
    }

  }

  themhang(name, cost, img,_id): void {
    this.crtime = Date.now()
    this.insertCart = { iduser: localStorage.getItem('iduser'), namesp: name, soluong: 1, costsp: cost, img: img, crtime: this.crtime, sumcost: 1 * cost, confirm: 0,idproduct:_id,nameuser:localStorage.getItem('nameuser'),trangthai:'đã thêm'}
    this.checkcart={iduser:localStorage.getItem('iduser'),idproduct:_id}
   
    this._eventService.kiemtrasanphamdathem(this.checkcart).subscribe(
      res=>{
        if(res.check!=0){
          this._eventService.tinhsoluongsanphamdangco(this.checkcart).subscribe(
            res=>{
              this.listsoluongdaco=res
              // in số lượng sản phẩm ra
              for(let a of this.listsoluongdaco){
                this.sldc=a['soluong']+1 // lấy số lượng cộng thêm 1
              }
             
               this.updatecountcart={iduser:localStorage.getItem('iduser'),idproduct:_id,soluong:this.sldc,sumcost:this.sldc*cost,confirm:0}
               this._eventService.updatesanphamdatontai(this.updatecountcart).subscribe(
                 res=>{
                  this.message=name
                  this.message += res
                  this._eventService.getCount(localStorage.getItem('iduser')).subscribe(
                    res => {
                      this.arraysumcount = res
                      for (let a of this.arraysumcount) {
                        this.sumcount = a['total']
                      }
                      this._sumservice.editsumCart(this.sumcount)
                    }
                  )  
                 }
               )
            }
          )
        }else{
         //khi chưa có sản phẩm trong giỏ hàng
         this._eventService.insertCart(this.insertCart).subscribe(
          res => {
          this.message = res
            this._eventService.getCount(localStorage.getItem('iduser')).subscribe(
              res => {
                this.arraysumcount = res
                for (let a of this.arraysumcount) {
                  this.sumcount = a['total']
                }
                this._sumservice.editsumCart(this.sumcount)
              }
            )    
    
            //end
          }
        );
        }
      }
    )

  }

}
