import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl : './departments.component.html',
  styles: []
})
export class DepartmentsComponent implements OnInit {

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
  }

  depts = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"React"},
    {"id":3, "name":"Vue JS"},
    {"id":4, "name":"Node"},
    {"id":5, "name":"Mongoose"}
  ];

  showDeptDetails(value ){
    console.log("clicked department " + value.id);
    // this.router.navigate(['/departments',value.id]);
    this.router.navigate([value.id],{relativeTo: this.activatedRoute});
  }

}
