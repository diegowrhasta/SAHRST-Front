import {Component, DoCheck, OnInit} from '@angular/core';
import { AuthService} from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit, DoCheck {
  public identity;
  public token;

  constructor(
    private _AuthService: AuthService
  ) {
    this.identity = this._AuthService.getIdentity();
    this.token = this._AuthService.getToken();
  }
  clickedLink(e) {
    const element = e.srcElement;

    console.log(e);
    for (let i = 0 ; i < element.parentElement.children.length ; i++) {
      if (element.parentElement.children[i].classList.contains('active')) {
        element.parentElement.children[i].classList.remove('active');
      }
    }
    element.classList.add('active');
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.identity = this._AuthService.getIdentity();
    this.token = this._AuthService.getToken();
  }

}
