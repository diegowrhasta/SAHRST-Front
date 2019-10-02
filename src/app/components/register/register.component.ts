import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public title: string;
  public user: User;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.title = 'Registrate';
    this.user = new User(1,'','','','','','','','','');

  }

  ngOnInit() {
    console.log('register.component cargado correctamente');
  }

  onSubmit(){
    //console.log(this.user);
    //console.log(this._userService.pruebas());
    
    this._userService.register(this.user).subscribe(
      response => {
        //this.status = response.status;
        if(this.status == 'success'){
          //vaciar el formulario
          this.user = new User(1,'','','','','','','','','');
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
