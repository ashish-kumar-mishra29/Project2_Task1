import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-email-form',
  standalone: false,
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})


export class EmailFormComponent {
  constructor(private http: HttpClient) {}
  FormData = new FormGroup({
    to_name:new FormControl('', [Validators.required]),
    to_email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required]),
    number:new FormControl('', [Validators.required]),
    
  })
  
   send(){
        // Passwords match, proceed with registration
        this.http.post<any>('https://localhost:7229/api/Registration/CreateUser', this.FormData.value)
        .subscribe(
          response => {
            console.log('Registration successful:', response);
            // Optionally, you can show a success message or redirect the user to another page
          },
          error => {
            console.error('Registration failed:', error);
            // Handle registration failure, show error message, etc.
          }
        );
  
        alert("Successfully Registered");

  }
  submit(){
    setTimeout(function() {
      // Redirect to the login page
      window.location.href = '/login';
  }, 3000);
  }
  

}

