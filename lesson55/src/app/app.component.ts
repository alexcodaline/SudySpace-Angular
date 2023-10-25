import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from "@angular/core";
import { UsersService } from "./service/users.service";
import { UsersGroupNameService } from "./service/users-group-name.service";
import { PopUpComponent } from "./pop-up/pop-up.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [UsersService],
})
export class AppComponent {
  users: any[];
  @ViewChild("popUp", { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<PopUpComponent>;

  constructor(
    public usersService: UsersService,
    public usersGroupNameService: UsersGroupNameService
  ) {
    this.users = usersService.users;
  }
  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    this.componentRef.instance.members = this.users.length;
    this.componentRef.instance.nameGroup = this.usersGroupNameService.groupName;
    this.componentRef.instance.close.subscribe(() => {
      this.viewRef.clear();
    });
  }
}
