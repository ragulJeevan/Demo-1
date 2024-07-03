import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ProjectComponent } from './components/project/project.component';
import { SolutionComponent } from './components/solution/solution.component';
import { FeatureComponent } from './components/feature/feature.component';
import { UsecaseComponent } from './components/usecase/usecase.component';
import { TaskComponent } from './components/task/task.component';
import { CoreLayoutComponent } from './components/core-layout/core-layout.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


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
    CoreRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
