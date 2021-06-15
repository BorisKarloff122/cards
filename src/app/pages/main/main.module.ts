import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PlayerConfComponent } from './components/player-conf/player-conf.component';
import { MaterialModule } from "../../shared/modules/material.module";
import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main-routing.module";
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CustomUiModule } from "../../shared/modules/custom-ui.module";



@NgModule({
  declarations: [
    PlayerConfComponent,
    MainComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    CustomUiModule
  ],

})
export class MainModule { }
