import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  constructor(private AR: ActivatedRoute, private CS: CrudService, private router: Router) { }
  id: any;
  datos = {
    nombres: '',
    apellidos: '',
    username: '',
    telefono: '',
    edad: '',
    id_rol: ''
  };

  roles = [{
    nombre: 'usuario'
  },{
    nombre: 'chofer'
  },{
    nombre: 'administrador'
  }
];

  ngOnInit() {
    this.id = this.AR.snapshot.params.id;
    if (this.id) {
      console.log('Editar');
      console.log(this.id);
      this.CS.getClienteID(this.id).subscribe((data: any) => {
        console.log(data);
        this.datos = data;
      });
    }
    this.users();
  }

  users(){
    this.CS.getClientes().subscribe((data: any) => {
      console.log(data);
    });
  }

  save(form: NgForm){
    console.log(form);
    this.CS.updateClient(form.value,this.id).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/get-client']);
    });
  }

}