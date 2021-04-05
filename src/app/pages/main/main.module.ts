import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PlayerConfComponent } from './components/player-conf/player-conf.component';
import { MaterialModule } from "../../shared/modules/material.module";



@NgModule({
  declarations: [

    PlayerConfComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MainModule { }
