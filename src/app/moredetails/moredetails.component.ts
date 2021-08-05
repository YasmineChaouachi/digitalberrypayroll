import { Component, OnInit } from '@angular/core';
import { employes } from '../employes/listesemployes';
import { Employee } from '../employes/employes';
@Component({
  selector: 'app-moredetails',
  templateUrl: './moredetails.component.html',
  styleUrls: ['./moredetails.component.scss'],
})
export class MoredetailsComponent implements OnInit {
  employes = employes;
  constructor() {}

  ngOnInit(): void {}
}
