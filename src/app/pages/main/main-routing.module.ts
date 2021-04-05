import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CollectionComponent} from "./components/collection/collection.component";
import {MenuComponent} from "./components/menu/menu.component";


const routes: Routes = [
  {path:"collection", component: CollectionComponent, loadChildren:() => import('./components/collection/collection.module')
      .then(m => m.CollectionModule)},
  {path:'main', component: MenuComponent,loadChildren:() => import('./components/menu/menu.module')
      .then(m => m.MenuModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
