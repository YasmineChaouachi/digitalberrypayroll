import { Component, OnInit } from '@angular/core';
import{employes}from '../employes/listesemployes';
import{Employee}from '../employes/employes';
@Component({
  selector: 'app-listedessalaries',
  templateUrl: './listedessalaries.component.html',
  styleUrls: ['./listedessalaries.component.scss']
})
export class ListedessalariesComponent implements OnInit {
employes=employes;
  constructor() { }

  ngOnInit(): void {
  }

}
