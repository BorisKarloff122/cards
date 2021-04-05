import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  public regForm!: FormGroup;
  public isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void{
    this.regForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]],

    })
  }


  public submitForm(): void{
    this.isSubmitted = true;
    if(this.regForm.valid && this.isSubmitted){
        this.loginService.userRegister(this.regForm.value).subscribe((res) =>  this.isSubmitted === false);
    }
  }

  public get getter(): { [p: string]: AbstractControl } {
    return this.regForm.controls;
  }
}
