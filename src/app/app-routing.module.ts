import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app-wrapper/app.component';
import { BreedsComponent } from './breeds/breeds.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LandingComponent } from './landing/landing.component';
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
      path: 'gallery', component: GalleryComponent
    }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
