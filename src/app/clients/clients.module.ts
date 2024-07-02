import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { DesignationComponent } from './designation/designation.component';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DesignationComponent,
    DepartmentComponent,
    UserComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule
  ]
})
export class ClientsModule { }
