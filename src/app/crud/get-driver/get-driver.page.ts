import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-driver',
  templateUrl: './get-driver.page.html',
  styleUrls: ['./get-driver.page.scss'],
})
export class GetDriverPage implements OnInit {

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

  constructor(private AR: ActivatedRoute, private CS: CrudService, private router: Router) { }

  id: any;

  ngOnInit() {
    this.id = this.AR.snapshot.params.id;
    if (this.id) {
      console.log('Editar');
      console.log(this.id);
      this.CS.getChoferID(this.id).subscribe((data: any) => {
        console.log(data);
        this.datos = data;
      });
    }
  }

  save(form: NgForm){
    console.log(form);
    this.CS.updateChofer(form.value,this.id).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/admin']);
    });
  }

}
