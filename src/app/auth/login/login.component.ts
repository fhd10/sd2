import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup

  constructor(private afAuth: AngularFireAuth,
     private fb: FormBuilder,
      private router: Router,
      private alert:MatSnackBar ) { }


  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: [' ', [Validators.email,Validators.required]],
      password: [' ', [Validators.minLength(6),Validators.required]]
    })
  }
   onLogin(){
     const {email,password }= this.loginform.value;
     this.afAuth.signInWithEmailAndPassword(email,password). then(() => {
       this.router.navigateByUrl('dashboared')
     })
     .catch(
       error => {
         this.alert.open(error.message,'Dismiss',{
        horizontalPosition: 'center',
        verticalPosition:'top'})
       }
     )
   }
}
