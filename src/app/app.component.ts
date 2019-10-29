import {Component, OnInit} from '@angular/core';
import { AuthService} from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  public identity;
  public token;

  constructor(
    private _AuthService: AuthService
  ) {
    this.identity = this._AuthService.getIdentity();
    this.token = this._AuthService.getToken();
  }

  ngOnInit(): void {
  }
}
