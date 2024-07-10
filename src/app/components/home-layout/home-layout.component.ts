import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  name: string;
  icon: string;
  route?: string;
  subMenu: MenuItem[];
  collapseId?: string;
}


@Component({
  selector: 'track-home-layout',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterOutlet],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent implements OnInit {

  public menuItems: MenuItem[] = [
    { name: 'Home', icon: 'fas fa-home', route:'/dash/home', subMenu: [], },
    { name: 'Dashboard', icon: 'fas fa-tachometer-alt', route:'/dash/dashboard',collapseId: '', subMenu: [], },
    { name: 'Core', icon: 'fa fa-sitemap', route: '/core/cores', subMenu: [], },
    { name: 'Foundation', icon: 'fa fa-institution',route:'/foundation/foundation', collapseId: '', subMenu: [], },
    { name: 'User-Management', icon: 'fa fa-user-circle',route:'/client/user-management',collapseId: '', subMenu: [], },
    { name: 'My Board', icon: 'fa fa-tasks',route:'/dash/board',collapseId: '', subMenu: [],},
    { name: 'Sprint Board', icon: 'fa fa-line-chart',route:'/dash/board',collapseId: '', subMenu: [],},
  ];

  constructor(
    private route: Router
  ) {

  }

  ngOnInit(): void {

  }

  public navigateTo(route: any) {
    this.route.navigate([route]);
  }


}
