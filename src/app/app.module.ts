import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './shared/components/card/card.component';
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./shared/modules/material.module";
import { HttpClientModule } from "@angular/common/http";
import { PasswordMatchValidatorDirective } from './shared/directives/password-match-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PasswordMatchValidatorDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    PasswordMatchValidatorDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
