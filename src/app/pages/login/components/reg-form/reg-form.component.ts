import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

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
  private sub: Subscription = new Subscription();
  private userExist!: boolean;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void{
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
    if(this.regForm.valid && this.passwordsMatch && !this.userExist){
      this.checkIfUserExists(this.getter.userName.value);
      if(this.userExist){
        this.regMessage = 'User already exists';
      }
      else{
        Object.assign(this.regForm.value, this.loginService.userStarterDeck);
        this.sendForm(this.regForm.value)
      }
    }
  }

  public changePasswordView(): void{
      this.showPassword = !this.showPassword
  }

  public get getter(): { [p: string]: AbstractControl } {
    return this.regForm.controls;
  }

  private checkIfUserExists(userName: string): void{
      this.sub.add(
        this.loginService.getUser(userName).subscribe((res) => {
            this.userExist = res.length > 0;
        })
      );
  }

  private sendForm(form): void{
    this.sub.add(
      this.loginService.userRegister(form).subscribe((res) => {
        this.isSubmitted = false;
        this.router.navigate(['../auth/login']);
      }));
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
