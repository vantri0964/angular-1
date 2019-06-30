import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

import { ActivatedRoute, Router, Data } from '@angular/router';
import { AuthService } from '../auth.service';
import { forEach } from '@angular/router/src/utils/collection';
import { SumService } from '../sum.service';
@Component({
  selector: 'app-detail-shoe',
  templateUrl: './detail-shoe.component.html',
  styleUrls: ['./detail-shoe.component.scss']
})
export class DetailShoeComponent implements OnInit {

  detail = []
  insertCart = {}
  message: String
  messageSL: String
  count: string
  crtime: Number
  soluong: Number
  sl: 1
  arraysumcount = []
  sumcount: string
  add: String
  checkcart = {}//kiểm tra
  listsoluongdaco = []//số lượng sản phẩm đã tồn tại
  sldc: any// số lượng để cập nhật
  updatecountcart = {}//mảng các dữ liệu cần cập nhật
  constructor(private _sumservice: SumService, private _detailService: EventService, private _router: Router, private route: ActivatedRoute, private _authService: AuthService) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('_id');
    this._detailService.getDetail(id)
      .subscribe(
        res => this.detail = res,
        err => console.log(err)
      )
  }
  // lấy giá trị số lượng
  onKey(event: any) {
    this.sl = event.target.value;
  }
  // Thêm vào giỏ hàng
  themhang(name, cost, img, _id): void {
    if (this._authService.loggedIn()) {
      this.add = '#modal-them';
      this.crtime = Date.now()
      if (this.sl == null) {
        this.sl = 1
      }

      this.insertCart = { iduser: localStorage.getItem('iduser'), namesp: name, soluong: this.sl, costsp: cost, img: img, crtime: this.crtime, sumcost: this.sl * cost, confirm: 0,idproduct:_id,nameuser:localStorage.getItem('nameuser'),trangthai:'đã thêm' }
      //kiểm tra sản phẩm đã được thêm chưa
      this.checkcart = { iduser: localStorage.getItem('iduser'), idproduct: _id }
      this._detailService.kiemtrasanphamdathem(this.checkcart).subscribe(
        res => {
          if (res.check != 0) {
            this._detailService.tinhsoluongsanphamdangco(this.checkcart).subscribe(
              res => {
                this.listsoluongdaco = res
                // in số lượng sản phẩm ra
                for (let a of this.listsoluongdaco) {
                  this.sldc = a['soluong'] + Number(this.sl) // lấy số lượng cộng thêm 1
                }

                this.updatecountcart = { iduser: localStorage.getItem('iduser'), idproduct: _id, soluong: this.sldc, sumcost: this.sldc * cost }
                this._detailService.updatesanphamdatontai(this.updatecountcart).subscribe(
                  res => {
                    this.message = name
                    this.message += res
                    this._detailService.getCount(localStorage.getItem('iduser')).subscribe(
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
          } else {
            //end kiểm tra
            this._detailService.insertCart(this.insertCart).subscribe(
              res => {
                this.message = res
                this.messageSL = 'Số Lượng:' + this.sl
                //tính giỏ hàng
                this._detailService.getCount(localStorage.getItem('iduser')).subscribe(
                  res => {
                    this.arraysumcount = res
                    for (let a of this.arraysumcount) {
                      this.sumcount = a['total']
                    }
                    this._sumservice.editsumCart(this.sumcount)
                  }
                )
              }
            );
          }


        }
      )

    } else {
      alert('Bạn cần đăng nhập!');
      this._router.navigate(['/login'])
    }
  }
  // mua hàng trực tiếp
  muahang(name, cost, img,_id): void {
    if (this._authService.loggedIn()) {
      this.add = '#modal-mua';
      if (this.sl == null) {
        this.sl = 1
      }
      this.crtime = Date.now()
      this.insertCart = { iduser: localStorage.getItem('iduser'), namesp: name, soluong: this.sl, costsp: cost, img: img, crtime: this.crtime, sumcost: this.sl * cost, confirm: 1,idproduct:_id,nameuser:localStorage.getItem('nameuser'),trangthai:'đang chờ xác nhận' }   
      this._detailService.insertCart(this.insertCart).subscribe(
        res => {
          this.message = res
          this.messageSL = 'Số Lượng:' + this.sl
        }
      );
    } else {
      alert('Bạn cần đăng nhập!');
      this._router.navigate(['/login'])
    }
  }


}
