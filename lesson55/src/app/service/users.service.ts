import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {
  users = [
    {
      name: "Oleksandr",
      status: "I'm learning angular",
      url: "https://i.pravatar.cc/150?img=12",
      id: 1,
    },
    {
      name: "Nikola",
      status: "Playing piano",
      url: "https://i.pravatar.cc/150?img=7",
      id: 2,
    },
    {
      name: "Bob",
      status: "Translations from Chinese",
      url: "https://i.pravatar.cc/150?img=11",
      id: 3,
    },
    {
      name: "Anna",
      status: "Pretty girl",
      url: "https://i.pravatar.cc/150?img=1",
      id: 4,
    },
  ];

  getUsers() {
    return this.users;
  }

  updateUserDetails(userId: number, newName: string, newStatus: string) {
    const userToUpdate = this.users.find(user => user.id === userId);
    if (userToUpdate) {
      userToUpdate.name = newName;
      userToUpdate.status = newStatus;
    }
  }
}