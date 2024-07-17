import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateChangePipe } from '../pipes/date-change.pipe';



@NgModule({
  declarations: [
    DateChangePipe
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
