import { Client } from './../interfaces/client.model';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientsService } from './../services/clients.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.css']
})
export class ClientformComponent implements OnInit {
  //client: string;
  client:Client = {
    name: null,
    lastname: null,
    ci: null
  };
  id: any;
  editing: boolean = false;
  clients: Client[];
  constructor(private clientsService: ClientsService, private activatedRoute: ActivatedRoute, public router:Router) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editing = true;
      this.clientsService.get().subscribe((data: Client[]) => {
        this.clients = data;
        this.client = this.clients.find((m) => {
          return m.id == this.id
        });
        console.log(this.client);
      },(error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
    }
    //console.log(this.id);
  }

  ngOnInit() {
  }

  saveClient(){
    //console.log(this.client);
    if (this.editing){
      this.clientsService.put(this.client).subscribe((data) => {
        alert('Cliente actualizado');
        console.log(data);
        this.router.navigate(['admin/client']);
      },(error) => {
        console.log(error);
        alert('error');
        this.router.navigate(['admin/client']);
      });
    }else{
      this.clientsService.save(this.client).subscribe((data) => {
        alert('Cliente guardado');
        console.log(data);
        this.router.navigate(['admin/client']);
      },(error) => {
        console.log(error);
        alert('error');
        this.router.navigate(['admin/client']);
      });

    }
  }

}
