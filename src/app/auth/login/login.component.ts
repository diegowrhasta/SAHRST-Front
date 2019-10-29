import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  f: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.f = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
    this.logout();
  }

  onSubmit() {
    this.authService.login(this.f.value).subscribe(
      () => {
        this.authService.userData().subscribe();
        this.router.navigate(['conductor']).then();
      },
      (errorResponse: HttpErrorResponse) => {console.log(errorResponse); }
    );
  }
  logout () {
    this._route.params.subscribe(params => {
      const logout = +params['sure'];
      if (logout === 1) {
        localStorage.removeItem('identity');
        localStorage.removeItem('access_token');
        const isNulled: boolean = this.authService.nullPublics();
        if (isNulled) {
          this._router.navigate(['']);
        }
      }
    });
  }

}
