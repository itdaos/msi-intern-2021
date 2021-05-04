import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    {
      path: '', pathMatch: "full", component: LandingComponent
    }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
