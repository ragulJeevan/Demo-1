import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ProjectComponent } from './project/project.component';
import { SolutionComponent } from './solution/solution.component';
import { FeatureComponent } from './feature/feature.component';
import { UsecaseComponent } from './usecase/usecase.component';
import { TaskComponent } from './task/task.component';
import { CoreLayoutComponent } from './core-layout/core-layout.component';


@NgModule({
  declarations: [
    ProjectComponent,
    SolutionComponent,
    FeatureComponent,
    UsecaseComponent,
    TaskComponent,
    CoreLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
