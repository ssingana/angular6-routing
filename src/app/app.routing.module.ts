import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CountriesComponent } from './countries/countries.component';
import { JobsComponent } from './jobs/jobs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component';
import { IdcemployeesComponent } from './idcemployees/idcemployees.component';
import { OnsiteemployeesComponent } from './onsiteemployees/onsiteemployees.component';
import { OffshoreemployeesComponent } from './offshoreemployees/offshoreemployees.component';

const routes: Routes = [
    { path: '', redirectTo: '/employees', pathMatch: 'full' },
    {
        path: 'employees',
        component: EmployeesComponent,
        children: [
            { path: 'idc', component: IdcemployeesComponent },
            { path: 'onsite', component: OnsiteemployeesComponent },
            { path: 'offshore', component: OffshoreemployeesComponent }
        ]
    },
    { path: 'departments', component: DepartmentsComponent },
    { path: 'departments/:id', component: DepartmentdetailsComponent },
    { path: 'countries', component: CountriesComponent },
    { path: 'jobs', component: JobsComponent },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [EmployeesComponent, DepartmentsComponent, CountriesComponent,
                                  JobsComponent, DepartmentdetailsComponent, OffshoreemployeesComponent,
                                  OnsiteemployeesComponent,IdcemployeesComponent,PageNotFoundComponent];