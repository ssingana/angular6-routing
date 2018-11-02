import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl:'./employees.component.html' ,
  styles: []
})
export class EmployeesComponent implements OnInit {

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }
userLoggedIn=false;
  ngOnInit() {
  }
  navigate(path){
console.log("Go to path : " + path);
this.router.navigate([path],{relativeTo : this.activatedRoute});
  }
}
