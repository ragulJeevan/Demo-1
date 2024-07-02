import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeLayoutComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-1';
}
