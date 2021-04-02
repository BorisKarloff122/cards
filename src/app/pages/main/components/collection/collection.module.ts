import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainBarComponent } from './components/main-bar/main-bar.component';



@NgModule({
  declarations: [SideBarComponent, MainBarComponent],
  exports: [
    SideBarComponent,
    MainBarComponent
  ],
  imports: [
    CommonModule
  ]
})

export class CollectionModule { }
