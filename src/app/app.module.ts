import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CollectionComponent } from './pages/main/components/collection/collection.component';
import { PlayComponent } from './pages/play/play.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './shared/card/card.component';
import { AppRoutingModule } from "./app-routing.module";
import {MaterialModule} from "./shared/assets/material.module";
import {CollectionModule} from "./pages/main/components/collection/collection.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CollectionComponent,
    PlayComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CollectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
