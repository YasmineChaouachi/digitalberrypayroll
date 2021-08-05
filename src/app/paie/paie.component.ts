import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import{employes}from '../employes/listesemployes';
import{Employee, Rubrique}from '../employes/employes';

@Component({
  selector: 'app-paie',
  templateUrl: './paie.component.html',
  styleUrls: ['./paie.component.scss']
})
export class PaieComponent implements OnInit {
  employes=employes;
  // employes: Employee[] = [];
  selectE?:Employee;
  error: string | null = null;

  constructor() { }

  ngOnInit(): void {

    this.loadEmployes();
    console.log(this.employes); // output []
  }

  // add async if using await for promise
  async loadEmployes() {
    // TODO: call api get employes and store it in this.employes
    // start loading
    // getEmp().subscribe((emps) => {
    //   this.employes = emps;
    //   console.log(this.employes); // output = emps
    //   for (const employe of this.employes) {
    //   employe.rubrique.push({nom: 'ee', contenu: 'zz'});
    //   }
    // }, (err) => {
        // this.error = err;
    // }, () => {
      // complete loading
    // })

    // ----- ou -----

    // start loading
    try {
      //  this.employes = await getEmp().toPromise();
      //   for (const employe of this.employes) {
      //   employe.rubrique.push({nom: 'ee', contenu: 'zz'});
      //   }
    } catch (err) {
      this.error = err;
    } finally {
      // complete loading
    }

  }

  addRubrique(rubrique: Rubrique, empId: number) {
    // {id:12,Nom:'Mercier',prenom:'Charlotte',
    // position:'Technicienne télécom et réseaux Informatique',date:'27 août 2007',
    // rubrique:[{nom:'chaouachi',contenu:'date'}]}

    const employe = this.employes.find(emp => emp.id === empId);
    if (employe) {
      employe.rubrique.push(rubrique);
    }

    // `/api/emp/${empId}/`
    // const data: Partial<Employee> = {
    //   rubrique: employe?.rubrique
    // }

  }

}

