import { Component, OnInit,OnDestroy } from '@angular/core';
import { FoundationHeader } from "../../widgets/constants";

@Component({
  selector: 'track-foundation-layout',
  templateUrl: './foundation-layout.component.html',
  styleUrl: './foundation-layout.component.scss'
})
export class FoundationLayoutComponent  implements OnInit,OnDestroy {

  public Headers : any = FoundationHeader;


  constructor(){}


  ngOnInit(): void {
  
    
  } 
  // 
  ngOnDestroy(): void {
    
  }

}
