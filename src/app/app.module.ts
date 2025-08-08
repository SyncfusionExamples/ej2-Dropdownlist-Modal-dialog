import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import the DropDownListModule for the DropDownList component
import { AppComponent } from './app.component';
import { DropDownListModule, AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { ModalComponent } from './modal.component';

@NgModule({
  //declaration of ej2-ng-dropdowns module into NgModule
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, DropDownListModule, AutoCompleteModule],
  declarations: [AppComponent, ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
