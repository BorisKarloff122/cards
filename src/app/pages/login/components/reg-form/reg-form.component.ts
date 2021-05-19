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
  public passwordsMatch: boolean = false;
  public regMessage: string = '';
  public showPassword: boolean = false;

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
      userName: ['', [Validators.required]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]],
      passwordMatch: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]]
    })
  }

  public passRepeat(): void{
    this.passwordsMatch = this.getter.userPassword.value === this.getter.passwordMatch.value;
    if(this.passwordsMatch === true){
      this.regMessage = '';
    }
  }

  public submitForm(): void{
    this.isSubmitted = true;
    if(this.regForm.valid && this.passwordsMatch){
      let userParams: object = {
        level:1,
        expRequired: 1000,
        decks:[],
        selectedDeck:1,
        icon: '../assets/img/icons/primaryIcon.jpg'
      };

      Object.assign(this.regForm.value, userParams);
        this.loginService.userRegister(this.regForm.value).subscribe((res) => {
          this.isSubmitted = false;
          this.router.navigate(['../auth/login']);
        });
    }

  }

  public changePasswordView(): void{
      this.showPassword = !this.showPassword
  }

  public get getter(): { [p: string]: AbstractControl } {
    return this.regForm.controls;
  }
}
