import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { employes } from '../employes/listesemployes';
import { Employee } from '../employes/employes';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-moredetails-item',
  templateUrl: './moredetails-item.component.html',
  styleUrls: ['./moredetails-item.component.scss'],
})
export class MoredetailsItemComponent implements OnInit {
  @Input() emp: Employee | any;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  showDetails(content: any) {
    this.modalService.open(content);
  }
}
