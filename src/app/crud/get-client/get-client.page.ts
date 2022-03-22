import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-get-client',
  templateUrl: './get-client.page.html',
  styleUrls: ['./get-client.page.scss'],
})
export class GetClientPage implements OnInit {

  table: any;
  constructor(private router: Router, private CS: CrudService) { }

  ngOnInit() {
    this.CS.getClientes().subscribe((data: any) => {
      console.log(data);
      this.table = data;
    });
  }

  editar(id: any){
    console.log(id);
    this.router.navigate(['/client',id])
  }

  eliminar(id: any){
    console.log(id);
    this.CS.deleteCliente(id).subscribe((data: any) =>{
      console.log(data);
      this.CS.getClientes().subscribe((data: any) => {
        console.log(data);
        this.table = data;
      });
    });
  }

}
