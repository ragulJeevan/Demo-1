import { Component, OnInit,OnDestroy } from '@angular/core';
import { CommonService } from '../../../Services/common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreService } from '../../Services/core.service';

@Component({
  selector: 'track-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent implements OnInit,OnDestroy{

  public modelName = 'Project';
  public addEditForm! : FormGroup;
  public isAdd: boolean = true;

  public dataList : any[] = [];

  constructor(
    private commonService : CommonService,
    private nativeService : CoreService,
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
