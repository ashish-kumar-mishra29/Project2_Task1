import { Component } from '@angular/core';
import { FormControl,FormsModule ,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  data = new FormGroup({
    to_email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required]),   
  });
  send(){
  }
  onLogIn(){
    setTimeout(function() {
      // Redirect to the login page
      window.location.href = '/reset';
  }, 3000);
    
  

  }  
}

