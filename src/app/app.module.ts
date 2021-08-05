import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListedessalariesComponent } from './listedessalaries/listedessalaries.component';
import { MoredetailsComponent } from './moredetails/moredetails.component';
import { PaieComponent } from './paie/paie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaieItemComponent } from './paie-item/paie-item.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListedessalariesComponent,
    MoredetailsComponent,
    PaieComponent,
    PaieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
