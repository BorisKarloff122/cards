import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { RegFormComponent } from "./components/reg-form/reg-form.component";
import { AuthComponent } from "./auth.component";
import { LoginGuard } from "../../shared/guards/loginGuard.guard";
import { AuthRoutingModule } from "./auth-routing.module";
import { MaterialModule } from "../../shared/modules/material.module";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    LoginFormComponent,
    RegFormComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  providers:[
    LoginGuard,
  ]
})
export class AuthModule { }
