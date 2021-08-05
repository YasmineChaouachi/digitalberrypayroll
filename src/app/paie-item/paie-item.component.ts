import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee, Rubrique } from '../employes/employes';

@Component({
  selector: 'app-paie-item',
  templateUrl: './paie-item.component.html',
  styleUrls: ['./paie-item.component.scss']
})
export class PaieItemComponent implements OnInit {

  @Input() emp: Employee | undefined;
  @Output() onaddRubrique: EventEmitter<Rubrique> = new EventEmitter<Rubrique>();

  rubriqueName = '';
  rubriqueContent = '';

  isCollapsed = true;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  addRubrique(content: any) {
    this.modalService.open(content);
  }

  addNew() {
    const rubrique: Rubrique = {
      contenu: this.rubriqueContent,
      nom: this.rubriqueName,
    }
    this.onaddRubrique.emit(rubrique)
  }

}
