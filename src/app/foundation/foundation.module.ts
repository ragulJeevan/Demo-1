import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoundationRoutingModule } from './foundation-routing.module';
import { StatusComponent } from './status/status.component';
import { TaskTypeComponent } from './task-type/task-type.component';
import { IssueTypeComponent } from './issue-type/issue-type.component';
import { SdlcComponent } from './sdlc/sdlc.component';
import { StageComponent } from './stage/stage.component';
import { ComplexityComponent } from './complexity/complexity.component';
import { PriorityComponent } from './priority/priority.component';
import { FoundationLayoutComponent } from './foundation-layout/foundation-layout.component';
import { MaterialModule } from '../material/material.module';


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
