import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginForm!: FormGroup;
  public showPassword: boolean = false;
  public isSubmitted: boolean = false;

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public changePasswordView(): void{
    this.showPassword = !this.showPassword
  }

  public buildForm(): void{
    this.loginForm = this.fb.group(
      {
        userName: ['', [Validators.required, Validators.minLength(6)]],
        userPassword: ['', Validators.required]
      }
    )
  }

  public submitForm(): void{
    this.isSubmitted = true;
    if(this.loginForm.valid){
      console.log('valid');
    }
  }

  public get getter(): { [p: string]: AbstractControl } {
    return this.loginForm.controls;
  }

}
