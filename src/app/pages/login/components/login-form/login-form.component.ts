import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";
import { User } from "../../../../shared/models/user";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginForm!: FormGroup;
  public showPassword: boolean = false;
  public isSubmitted: boolean = false;
  public loginMessage: string = '';
  constructor(
    private fb:FormBuilder,
    private loginService: LoginService,
    private router: Router
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
        userName: ['', [Validators.required]],
        userPassword: ['', Validators.required]
      }
    )
  }

  public submitForm(): void{
    this.isSubmitted = true;
    if(this.loginForm.valid){
      this.loginService.getUser(this.loginForm.value.userName).subscribe((res: User[]) =>{
          let responseMatch = res.find((entry) => entry.userPassword === this.loginForm.value.userPassword);
          if (res.length === 0){
            this.loginMessage = 'User does not exist';
            return;
          } else if (!responseMatch){
            this.loginMessage = 'Invalid password';
            setTimeout(() => this.loginMessage = '', 2500);
            return;
          } else {
            this.router.navigateByUrl('/main');
          }
        }
      )
    }
  }

  public get getter(): { [p: string]: AbstractControl } {
    return this.loginForm.controls;
  }

}
