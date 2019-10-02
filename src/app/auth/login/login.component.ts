import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  f: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.f = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.authService.login(this.f.value).subscribe(
      (resp) => { 
        this.router.navigate(['conductor']);
        console.log(resp); 
      },
      (errorResponse: HttpErrorResponse) => {console.log(errorResponse);}
    );
  }

}
