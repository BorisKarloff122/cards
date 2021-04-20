import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from "./pages/login/auth.component";
import {MainComponent} from "./pages/main/main.component";

const routes: Routes = [
  {path:'auth', component: AuthComponent, loadChildren:() => import('./pages/login/auth.module')
      .then(m => m.AuthModule)},
  {path:'main', component: MainComponent, loadChildren:() => import('./pages/main/main.module')
      .then(m => m.MainModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
