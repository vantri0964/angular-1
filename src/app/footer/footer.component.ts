import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  events = []
  comment = {}
  commentForm: FormGroup
  timeCM: Number
  thanhcong: boolean = false
  note = []

  constructor(private _eventService: EventService, private route: ActivatedRoute, private _router: Router, private _authService: AuthService) {
    this.commentForm = new FormGroup({
      email: new FormControl(),
      text: new FormControl()
    }
    )
  }
  //nhận xét người dùng
  commentUser(): void {
    this.timeCM = Date.now()
    this.comment = { email: this.commentForm.get('email').value, text: this.commentForm.get('text').value, timeComment: this.timeCM }
    this._eventService.commentUser(this.comment).subscribe(
      res => {
        this.thanhcong = true
        this.note = res
        this._router.navigate(['/events'])
      }
    )
  }

  ngOnInit() {
    this._eventService.getAuthor()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
  }

}
