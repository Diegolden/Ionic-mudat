import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost/apimudat/';

  getCliente(login: any){
    return this.http.get(`${this.URL}admin/crudClients/getCliente.php?username=${login.correo}`);
  }

  getClienteID(login: any){
    return this.http.get(`${this.URL}admin/crudClients/getClientID.php?id=${login}`);
  }
  
  updateClient(form: any, id: any){
    return this.http.post(`${this.URL}admin/crudClients/updateCliente.php?id=${id}`, JSON.stringify(form));
  }
  
  getClientes(){
    return this.http.get(`${this.URL}admin/crudClients/getClientes.php`);
  }
  
  deleteCliente(id: any){
    return this.http.get(`${this.URL}admin/crudClients/deleteCliente.php?id=${id}`);
  }

  // CHOFERES

  getChofer(login: any){  
    return this.http.get(`${this.URL}admin/crudDrivers/getDriver.php?username=${login.correo}`);
  }

  getChoferID(login: any){
    return this.http.get(`${this.URL}admin/crudDrivers/getDriverID.php?id=${login}`);
  }
  
  updateChofer(form: any, id: any){
    return this.http.post(`${this.URL}admin/crudDrivers/updateDriver.php?id=${id}`, JSON.stringify(form));
  }
  
  getChoferes(){
    return this.http.get(`${this.URL}admin/crudDrivers/getDrivers.php`);
  }
  
  deleteChofer(id: any){
    return this.http.get(`${this.URL}admin/crudDrivers/deleteDriver.php?id=${id}`);
  }

}
