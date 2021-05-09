import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppRootComponent } from './app-root.component';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app-wrapper/app.component';
import { VotingComponent } from './voting/voting.component';
import { BreedsComponent } from './breeds/breeds.component';
import { GalleryComponent } from './gallery/gallery.component';
import { httpInterceptorsProviders } from './httpInterceptorsProviders';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DndDirective } from './dnd.directive';
import { BreedsInfoComponent } from './breeds-info/breeds-info.component';
import { SearchBreedComponent } from './search-breed/search-breed.component';
import { LikesComponent } from './likes/likes.component';
import { DislikesComponent } from './dislikes/dislikes.component';
import { FavoursComponent } from './favours/favours.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AppRootComponent,
    VotingComponent,
    BreedsComponent,
    GalleryComponent,
    DndDirective,
    BreedsInfoComponent,
    SearchBreedComponent,
    LikesComponent,
    DislikesComponent,
    FavoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorsProviders],
  bootstrap: [AppRootComponent]
})
export class AppRootModule { }
