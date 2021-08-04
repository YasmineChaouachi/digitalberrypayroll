import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import{employes}from '../employes/listesemployes';
import{Employee}from '../employes/employes';
import { FormBuilder, FormGroup, Validators, FormArray,FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@Component({
  selector: 'app-paie',
  templateUrl: './paie.component.html',
  styleUrls: ['./paie.component.scss']
})
export class PaieComponent implements OnInit {
  employes=employes;
  selectE?:Employee;
  data={};
  rubriqueForm= new FormGroup({
    nom: new FormControl(''),
    contenu: new FormControl(''),
  });
  constructor(private modalService:NgbModal, private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  showDetails(content:any,employe:Employee){
    this.modalService.open(content);
    this.data=employe
    console.log(employe);
    this.selectE=employe;
let index = this.employes.indexOf(this.selectE);
    // this.selectE.rubrique. = "Change Hardik";
    this.employes[index] = this.selectE;

    console.log(this.employes);
    // var employesid=this.employes.filter(x=>x.id===id);
    // // console.log(employesid);
    // employesid.forEach(e=>{this.employes.push(this.data)});
  }
  addNew(){
    this.employes.push({id:9,Nom:'Dupont',prenom:'Léo',position:'Ingénieur technio-commercial en Informatique',date:'28 mars 2012',rubrique:[this.rubriqueForm.value]})
    console.log(this.rubriqueForm.value);

  }

}
