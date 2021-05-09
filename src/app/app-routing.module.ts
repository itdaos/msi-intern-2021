import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app-wrapper/app.component';
import { BreedsInfoComponent } from './breeds-info/breeds-info.component';
import { BreedsComponent } from './breeds/breeds.component';
import { DislikesComponent } from './dislikes/dislikes.component';
import { FavoursComponent } from './favours/favours.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LandingComponent } from './landing/landing.component';
import { LikesComponent } from './likes/likes.component';
import { SearchBreedComponent } from './search-breed/search-breed.component';
import { VotingComponent } from './voting/voting.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    {
      path: '', pathMatch: "full", component: LandingComponent
    },
    {
      path: 'voting', component: VotingComponent
    },
    {
      path: 'breeds', component: BreedsComponent
    },
    {
      path: 'breeds/:id', component: BreedsInfoComponent
    },
    {
      path: 'gallery', component: GalleryComponent
    },
    {
      path: 'search/:name', component: SearchBreedComponent
    },
    {
      path: 'likes', component: LikesComponent
    },
    {
      path: 'dislikes', component: DislikesComponent
    },
    {
      path: 'favours', component: FavoursComponent
    },

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
