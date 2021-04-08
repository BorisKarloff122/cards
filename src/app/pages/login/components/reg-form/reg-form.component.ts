import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  public regForm!: FormGroup;
  public isSubmitted: boolean = false;
  public passMatch: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void{
    this.regForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]],
      passwordMatch: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.email]]
    })
  }

  public passRepeat(): void{
    this.passMatch = this.getter.userPassword.value === this.getter.passwordMatch.value;
  }

  public submitForm(): void{
    this.isSubmitted = true;
    if(this.regForm.valid && this.isSubmitted){
        this.loginService.userRegister(this.regForm.value).subscribe((res) => {
          this.isSubmitted = false;
          this.router.navigate(['login']);
        });
    }
  }

  public get getter(): { [p: string]: AbstractControl } {
    return this.regForm.controls;
  }
}
