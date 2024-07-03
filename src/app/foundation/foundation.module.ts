import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoundationRoutingModule } from './foundation-routing.module';
import { MaterialModule } from '../material/material.module';
import { ComplexityComponent } from './components/complexity/complexity.component';
import { FoundationLayoutComponent } from './components/foundation-layout/foundation-layout.component';
import { IssueTypeComponent } from './components/issue-type/issue-type.component';
import { PriorityComponent } from './components/priority/priority.component';
import { SdlcComponent } from './components/sdlc/sdlc.component';
import { StageComponent } from './components/stage/stage.component';
import { StatusComponent } from './components/status/status.component';
import { TaskTypeComponent } from './components/task-type/task-type.component';


@NgModule({
  declarations: [
    StatusComponent,
    TaskTypeComponent,
    IssueTypeComponent,
    SdlcComponent,
    StageComponent,
    ComplexityComponent,
    PriorityComponent,
    FoundationLayoutComponent
  ],
  imports: [
    CommonModule,
    FoundationRoutingModule,
    MaterialModule
  ]
})
export class FoundationModule { }
