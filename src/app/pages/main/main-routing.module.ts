import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CollectionComponent} from "./components/collection/collection.component";
import {StartingComponent} from "./components/starting/starting.component";


const routes: Routes = [
  {path:'', component: StartingComponent},
  {path:'collection', component: CollectionComponent, loadChildren:() => import('./components/collection/collection.module')
      .then(m => m.CollectionModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
