import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { LoginComponent } from './components/login/login.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonService } from './Services/common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HomeLayoutComponent,LoginComponent,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public isLoader : boolean = false;

  title = 'TrackZit';

  constructor(
    private commonService : CommonService,
  ){}

  ngOnInit(): void {
    this.commonService.getLoader.subscribe((loader:any)=>{
      this.isLoader = loader
    })
  }  
}
