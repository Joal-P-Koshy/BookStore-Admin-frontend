import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  email : string = ''
  password : string = ''

  constructor( private api: ApiService, private route: Router ){}

  loginAdmin(){
    const admin = {
      email : this.email,
      password : this.password
    }
    this.api.adminLoginApi(admin).subscribe({
      next:(res: any) => {
        alert("Successfully logged in")
        this.route.navigateByUrl('dashboard');
      },
      error:(res: any) => {
        alert(res.error)
      }
    })
  }
}
