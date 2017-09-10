import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {CommonComponent} from "../common/common-component";
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends CommonComponent implements OnInit {

  public hello: string;
  public menuItems: MenuItem[];

  constructor(private dashboardService: DashboardService) {
    super();
  }

  ngOnInit() {
    this.initMenu();

    this.dashboardService.getHello().subscribe(
      data => {
        this.hello = data.hello;
      },
      error => {
        this.handleException(error);
      }
    );
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
