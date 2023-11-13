import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword: boolean = true;
  data:any
  constructor(private fb: FormBuilder, private router: Router,private auth :AuthService,private route:Router) {
    //this is for form in the html 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
//if there is a condition is correct in the login function so to the dashboard 
  todashboard(){
    this.route.navigate(['/d/dashboard'])
    }
//for login buttom 
  login() {
    this.auth.login(this.loginForm).subscribe(doc=>{
      this.data=doc;
      this.auth.savetoken(this.data.token)
      if(this.auth.LoggedIn()){
        this.todashboard()
      }
    },err=>{

    })
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
