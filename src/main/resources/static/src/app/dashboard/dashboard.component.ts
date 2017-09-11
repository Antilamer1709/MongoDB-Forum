import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {CommonComponent} from "../common/common-component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends CommonComponent implements OnInit {

  public hello: string;

  constructor(private dashboardService: DashboardService) {
    super();
  }

  ngOnInit() {


    // this.dashboardService.getHello().subscribe(
    //   data => {
    //     this.hello = data.hello;
    //   },
    //   error => {
    //     this.handleException(error);
    //   }
    // );
  }

}
