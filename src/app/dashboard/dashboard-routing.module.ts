import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SprintBoardComponent } from './components/sprint-board/sprint-board.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'board',component:SprintBoardComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
