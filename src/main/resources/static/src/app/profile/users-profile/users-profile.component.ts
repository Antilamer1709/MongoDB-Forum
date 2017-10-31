import {Component, Input, OnInit} from '@angular/core';
import {CommonComponent} from "../../common/common-component";
import {MessageService} from "primeng/components/common/messageservice";
import {ProfileService} from "../profile.service";
import {UserModel} from "../../app-model";

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent extends CommonComponent implements OnInit {

  @Input() username: string;
  public user: UserModel;

  constructor(messageService: MessageService,
              private profileService: ProfileService) {
    super(messageService);
  }

  ngOnInit() {
    this.initUserProfile();
  }

  private initUserProfile(): void {
    this.user = new UserModel();
    this.profileService.getUsersProfile(this.username).subscribe(
      data => {
        this.user = data;
      },
      error => {
        this.handleException(error);
      }
    );
  }

}
