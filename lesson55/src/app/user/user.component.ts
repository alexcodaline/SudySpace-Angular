import { Component, Input } from "@angular/core";
import { UsersGroupNameService } from "../service/users-group-name.service";
import { UsersService } from "../service/users.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent {
  @Input() name = "";
  @Input() status = "";
  @Input() img = "";
  @Input() userId!: number;
  newGroupName: string = "";
  newName: string = this.name;
  newStatus: string = this.status;

  constructor(
    public usersGroupNameService: UsersGroupNameService,
    public usersService: UsersService
  ) {}

  updateGroupName() {
    this.usersGroupNameService.groupName = this.newGroupName;
  }

  updateUserInfo() {
    this.usersService.updateUserDetails(
      this.userId,
      this.newName,
      this.newStatus
    );
  }
}
