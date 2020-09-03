import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router'
import { PageNotFoundComponent } from './components/not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
