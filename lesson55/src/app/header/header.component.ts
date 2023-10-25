import { Component, EventEmitter, Output } from "@angular/core";
import { UsersGroupNameService } from "../service/users-group-name.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  newGroupName: string = '';

  constructor(public usersGroupNameService: UsersGroupNameService) {}

  updateGroupName() {
    this.usersGroupNameService.groupName = this.newGroupName;
  }
}