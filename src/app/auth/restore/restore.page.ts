import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage implements OnInit {

  restore = {
    correo: '',
    codigo: '',
    code: ''
  }

  constructor(private AS: AuthService, private router: Router) { }

  ngOnInit() {
  }

  save(form: NgForm){
    console.log(form.value);
    
  }

}
