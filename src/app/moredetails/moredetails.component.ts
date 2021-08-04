import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{employes}from '../employes/listesemployes';
import{Employee}from '../employes/employes'
@Component({
  selector: 'app-moredetails',
  templateUrl: './moredetails.component.html',
  styleUrls: ['./moredetails.component.scss']
})
export class MoredetailsComponent implements OnInit {
  employes=employes;
  constructor(private modalService:NgbModal ) { }

  ngOnInit(): void {
  }

  showDetails(content:any){
    this.modalService.open(content);
  }

}
