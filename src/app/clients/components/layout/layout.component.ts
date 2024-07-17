import { Component, OnInit,OnDestroy } from '@angular/core';
import { ClientHeader } from "../../widgets/constants";

@Component({
  selector: 'track-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit,OnDestroy {

  public headers : any = ClientHeader;


  constructor(){}


  ngOnInit(): void {
   
    
  } 
  // 
  ngOnDestroy(): void {
    
  }

}
