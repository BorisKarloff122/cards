import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuButtonComponent} from "../components/menu-button/menu-button.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    MenuButtonComponent
  ],
  exports: [
    MenuButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CustomUiModule { }
