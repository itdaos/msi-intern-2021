import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppRootComponent } from './app-root.component';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppRootModule { }
