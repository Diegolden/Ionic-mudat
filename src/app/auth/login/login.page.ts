import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {
    username: '',
    password: ''
  }

  constructor(private AS: AuthService, private router: Router) { }

  ngOnInit() {
  }

  save(form: NgForm){
    console.log(form.value);
    this.AS.login(form.value).subscribe((data: any) => {
      if(data.resultado === 'Conectado'){
        console.log(data);
        if(data.id_rol == 3){
          this.router.navigate(['/admin']);
        }
        if(data.id_rol == 1){
          this.router.navigate(['/client-home']);
        }
      }
    });
  }

}
