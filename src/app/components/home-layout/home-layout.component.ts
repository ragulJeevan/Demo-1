import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  name: string;
  icon: string;
  route?: string;
  subMenu?: MenuItem[];
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
    { name: 'Home', icon: 'fas fa-home', route: '/home',subMenu: [], },
    { name: 'Dashboard', icon: 'fas fa-tachometer-alt', collapseId: 'submenu1',subMenu: [],},
    { name: 'Core', icon: 'fas fa-shopping-cart', route: '/orders',subMenu: [], },
    {name: 'Foundation', icon: 'fas fa-layer-group',collapseId: 'submenu2',subMenu: [],},
    {name: 'User-Management', icon: 'fas fa-layer-group',collapseId: 'submenu2',subMenu: [],},
  ];

  constructor(
    private route: Router
  ) {

  }

  ngOnInit(): void {

  }

  public navigateTo(route: any) {
    // this.route.navigate([route]);

  }


}
