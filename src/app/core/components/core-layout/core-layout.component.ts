import { Component, OnInit,OnDestroy } from '@angular/core';
import { CoreHeader } from "../../widgets/constants";

@Component({
  selector: 'track-core-layout',
  templateUrl: './core-layout.component.html',
  styleUrl: './core-layout.component.scss'
})
export class CoreLayoutComponent implements OnInit,OnDestroy{

  public Headers : any = CoreHeader;


  constructor(){}


  ngOnInit(): void {
  
    
  } 
  // 
  ngOnDestroy(): void {
    
  }
}
