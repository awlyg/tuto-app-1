import { NgModule } from '@angular/core';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectRoutingModule } from './project.routing';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
      ProjectListComponent
    ],
    imports: [
      CommonModule,
      ProjectRoutingModule],
    exports: []
})
export class ProjectModule {}
