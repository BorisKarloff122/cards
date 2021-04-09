import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginGuard} from "../../shared/guards/loginGuard.guard";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {RegFormComponent} from "./components/reg-form/reg-form.component";


const routes: Routes = [
  {path:'', component: LoginFormComponent},
  {path:'register', component: RegFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
