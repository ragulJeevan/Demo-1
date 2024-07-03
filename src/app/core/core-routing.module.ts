import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLayoutComponent } from './components/core-layout/core-layout.component';

const routes: Routes = [
  {path:'cores',component:CoreLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
