import { Component, OnInit,OnDestroy } from '@angular/core';
import { CommonService } from '../../../Services/common.service';
import { FoundationService } from '../../Services/foundation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'track-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent implements OnInit,OnDestroy{

  public modelName = 'Status';
  public addEditForm! : FormGroup;
  public isAdd: boolean = true;

  constructor(
    private commonService : CommonService,
    private nativeService : FoundationService,
    private modalService: NgbModal,

  ){}

  ngOnInit(): void {
    this.addEditForm = new FormGroup({
      model_name: new FormControl('', Validators.required),
    })
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
