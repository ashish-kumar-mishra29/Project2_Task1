import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  constructor(private http: HttpClient) {}
  Data = new FormGroup({
    to_email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    Cpassword: new FormControl('', [Validators.required]),
  });
  send(){
    // Passwords match, proceed with registration
    this.http.post<any>('https://localhost:7229/api/ResetPassword/reset_password', this.Data.value)
    .subscribe(
      response => {
        console.log('Password changed successful:', response);
        // Optionally, you can show a success message or redirect the user to another page
      },
      error => {
        console.error('Password changed failed:', error);
        // Handle registration failure, show error message, etc.
      }
    );

    alert("Successfully changed password");

}

  onLogIn() {
    // setTimeout(function () {
    //   // Redirect to the login page
    //   window.location.href = '/';
    // }, 3000);
  }
}
