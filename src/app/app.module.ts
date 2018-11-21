import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5BreadcrumbModule, BreadcrumbService} from 'ng5-breadcrumb';

import { AppComponent } from './app.component';
import { routingComponents, AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5BreadcrumbModule
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
