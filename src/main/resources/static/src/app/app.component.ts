import {Component, OnInit} from '@angular/core';
import {CommonComponent} from "./common/common-component";
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends CommonComponent implements OnInit  {

  public menuItems: MenuItem[];

  constructor() {
    super();
  }

  ngOnInit() {
    this.initMenu();
  }

  private initMenu(): void {
    this.menuItems = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'fa-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          {label: 'Undo', icon: 'fa-mail-forward'},
          {label: 'Redo', icon: 'fa-mail-reply'}
        ]
      }
    ];
  }
}
