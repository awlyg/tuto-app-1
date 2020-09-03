import { NgModule } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';


const routes: Routes = [
  { path: 'projects/all', component: ProjectListComponent }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule {}
