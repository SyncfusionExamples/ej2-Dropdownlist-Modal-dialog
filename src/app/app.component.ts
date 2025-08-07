import { Component } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'my-app',
  template: `
<button type="button" (click)="modal1.show()">Modal Dialog</button>
  <app-modal #modal1>
    <div class="app-modal-header">
      Dropdownlist
    </div>
    <div class="app-modal-body">
      <ejs-dropdownlist id='ddlelement' #samples [dataSource]='data' (open)='onOpen($event)' [fields]='fields' [placeholder]='text'></ejs-dropdownlist>
    </div>
    <div class="app-modal-footer">
    </div>
  </app-modal>
`
})
export class AppComponent {
  // defined the array of data
  public data: { [key: string]: Object }[] = [
    { Id: 'Game1', Game: 'American Football' },
    { Id: 'Game2', Game: 'Badminton' },
    { Id: 'Game3', Game: 'Basketball' },
    { Id: 'Game4', Game: 'Cricket' },
    { Id: 'Game5', Game: 'Football' },
    { Id: 'Game6', Game: 'Golf' },
    { Id: 'Game7', Game: 'Hockey' },
    { Id: 'Game8', Game: 'Rugby' },
    { Id: 'Game9', Game: 'Snooker' },
    { Id: 'Game10', Game: 'Tennis' }
  ];
  // maps the appropriate column to fields property
  public fields: Object = { text: 'Game', value: 'Id' };
  //set the placeholder to DropDownList input
  public text: string = "Select a game";
  public dropObj : DropDownListComponent;
  onOpen(args: any) {
    let zIndex: number = parseInt(document.defaultView.getComputedStyle(document.getElementsByClassName('modal')[0]).zIndex);
    //this.dropObj.zIndex = zIndex + 1;
   args.popup.element.style.zIndex = zIndex + 1;
  }
}