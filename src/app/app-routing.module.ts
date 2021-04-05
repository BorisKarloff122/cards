import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginGuard} from "./shared/guards/loginGuard.guard";
import {AuthComponent} from "./pages/login/auth.component";

const routes: Routes = [
  {path:'', component: AuthComponent, loadChildren:() => import('./pages/login/auth.module')
      .then(m => m.AuthModule)},
  {path:'main', canActivate: [LoginGuard], loadChildren:() => import('./pages/main/main.module')
      .then(m => m.MainModule) },
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
