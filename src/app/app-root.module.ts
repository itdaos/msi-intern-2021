import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppRootComponent } from './app-root.component';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app/app.component';
import { VotingComponent } from './voting/voting.component';
import { BreedsComponent } from './breeds/breeds.component';
import { GalleryComponent } from './gallery/gallery.component';
import { httpInterceptorsProviders } from './httpInterceptorsProviders';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AppRootComponent,
    VotingComponent,
    BreedsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [httpInterceptorsProviders],
  bootstrap: [AppRootComponent]
})
export class AppRootModule { }
