import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService} from '../../services/user.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public title: string;
  public user: User;

  constructor(
    private _userService: UserService,
    private router:Router 
  ) { 
    this.title = 'Identificate';
    this.user = new User(1,'','','','','','','','','');
  }

  ngOnInit() {
    console.log('login.component cargado correctamente');
  }

  onSubmit(form){
    console.log(this.user);

    this._userService.signup(this.user).subscribe(
      response => {
        this.router.navigate(['conductor']);
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
