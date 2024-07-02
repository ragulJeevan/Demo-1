import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoundationLayoutComponent } from './foundation-layout/foundation-layout.component';

const routes: Routes = [
  {path:'foundation',component:FoundationLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoundationRoutingModule { }
