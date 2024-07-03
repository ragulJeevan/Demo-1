import { Component, OnInit,OnDestroy } from '@angular/core';
import { CommonService } from '../../../Services/common.service';
import { FoundationService } from '../../Services/foundation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'track-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent implements OnInit,OnDestroy{

  public modelName = 'Status';
  public addEditForm! : FormGroup

  constructor(
    private commonService : CommonService,
    private nativeService : FoundationService,
    private modalService: NgbModal,

  ){}

  ngOnInit(): void {
    
  } 
  // 
  ngOnDestroy(): void {
    
  }
  // 
  public openAddEditModal(modal: any, type: string, data: any){
    this.modalService.open(modal, {
      size: 'md',
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',
      keyboard: false
    });
  }
  // 
  close() {
    this.modalService.dismissAll();
  }


}
