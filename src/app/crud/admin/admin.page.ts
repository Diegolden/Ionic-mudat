import { Router } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  formulario = {
    correo: ''
  }
  
  datos = {
    id_user: '',
    nombres: '',
    apellidos: '',
    username: '',
    telefono: '',
    edad: ''
  };

  constructor(private CS: CrudService, private router: Router) { }

  ngOnInit() {
  }

  editar(id: any){
    console.log(id);
    this.router.navigate(['/client',id])
  }

  eliminar(id: any){
    console.log(id);
    this.CS.deleteCliente(id).subscribe((data: any) =>{
      console.log(data);
      this.router.navigate(['/admin']);
    });
  }

  save(form: NgForm){
    console.log(form);
    this.CS.getCliente(form.value).subscribe((data: any) => {
      if(data.nombres){
        console.log(data);
        console.log('xd');
        this.datos = data;
        console.log(this.datos);
      }else{
        this.datos = {
          id_user: '',
          nombres: '',
          apellidos: '',
          username: '',
          telefono: '',
          edad: ''
        };
      }
    });
  }

}
