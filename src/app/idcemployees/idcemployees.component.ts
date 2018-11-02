import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-idcemployees',
  templateUrl: './idcemployees.component.html',
  styles: []
})
export class IdcemployeesComponent implements OnChanges {

  @Input() loggedIn : boolean;

  constructor() { }

  ngOnChanges(changes : SimpleChanges) {
    console.log("Employees changed :" + changes);
  }

}
