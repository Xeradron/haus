import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressFormComponent } from './testcomponents/address-form/address-form.component';
import { MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatMenuModule,
  MatTreeModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './testcomponents/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './testcomponents/table/table.component';
import { DashboardComponent } from './testcomponents/dashboard/dashboard.component';
import { TreeComponent } from './testcomponents/tree/tree.component';
import { DragdropComponent } from './testcomponents/dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    TreeComponent,
    DragdropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
