import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-departmentdetails',
  templateUrl : './departmentdetails.component.html',
  styles: []
})
export class DepartmentdetailsComponent implements OnInit {
  deptId;

  constructor(private activatedRoute : ActivatedRoute, private rounter : Router) { }

  ngOnInit() {
    // let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.deptId = id;
    // console.log("Selected Department id " + id);

    this.activatedRoute.paramMap.subscribe((params : ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.deptId=id;
    });
  }
  previous(){
    let prevId = this.deptId -1;
this.rounter.navigate(['/departments',prevId]);
  }

  next(){
    let prevId = this.deptId + 1;
this.rounter.navigate(['/departments',prevId]);
  }

  back(){
    let prevId = this.deptId + 1;
this.rounter.navigate(['../',{id : prevId}], {relativeTo : this.activatedRoute});
  }

}
