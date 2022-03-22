import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-driver',
  templateUrl: './admin-driver.page.html',
  styleUrls: ['./admin-driver.page.scss'],
})
export class AdminDriverPage implements OnInit {

  formulario = {
    correo: ''
  }
  
  datos = {
    id_chofer: '',
    nombre: '',
    apellidos: '',
    edad: '',
    direccion: '',
    telefono: '',
    correo: '',
    rfc: '',
    curp: '',
    acta_nacimiento: '',
    ine: '',
    licencia_conducir: '',
    modelo_automovil: '',
    permiso_carga: '',
    comprobante_domicilio: ''
  };

  constructor(private CS: CrudService, private router: Router) { }

  ngOnInit() {
  }

  editar(id: any){
    console.log(id);
    this.router.navigate(['/get-driver',id])
  }
  
  eliminar(id: any){
    console.log(id);
    this.CS.deleteChofer(id).subscribe((data: any) =>{
      console.log(data);
      this.router.navigate(['/admin']);
    });
  }

  save(form: NgForm){
    console.log(form);
    this.CS.getChofer(form.value).subscribe((data: any) => {
      if(data.nombre){
        console.log(data);
        console.log('xd');
        this.datos = data;
        console.log(this.datos);
      }else{
        this.datos = {
          id_chofer: '',
          nombre: '',
          apellidos: '',
          edad: '',
          direccion: '',
          telefono: '',
          correo: '',
          rfc: '',
          curp: '',
          acta_nacimiento: '',
          ine: '',
          licencia_conducir: '',
          modelo_automovil: '',
          permiso_carga: '',
          comprobante_domicilio: ''
        };
      }
    });
  }

}
