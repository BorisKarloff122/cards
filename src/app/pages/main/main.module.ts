import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PlayerConfComponent } from './components/player-conf/player-conf.component';
import { MaterialModule } from "../../shared/modules/material.module";
import {MainComponent} from "./main.component";
import {MainRoutingModule} from "./main-routing.module";



@NgModule({
  declarations: [
    PlayerConfComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
