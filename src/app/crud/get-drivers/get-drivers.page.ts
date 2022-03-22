import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-drivers',
  templateUrl: './get-drivers.page.html',
  styleUrls: ['./get-drivers.page.scss'],
})
export class GetDriversPage implements OnInit {
  table: any;
  constructor(private router: Router, private CS: CrudService) { }

  ngOnInit() {
    this.choferes();
  }

  choferes(){
    this.CS.getChoferes().subscribe((data: any) => {
      console.log(data);
      this.table = data;
    });
  }

  editar(id: any){
    console.log(id);
    this.router.navigate(['/get-driver',id]);
  }

  eliminar(id: any){
    console.log(id);
    this.CS.deleteChofer(id).subscribe((data: any) =>{
      console.log(data);
      this.choferes();
    });
  }

}
