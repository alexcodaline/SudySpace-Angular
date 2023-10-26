import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-work';
  users: any;
  isChecked: boolean = false;
  
  
  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.users = data;
    });
  }

  submit(form: any) {
    this.isChecked = false
    this.users.forEach((user: any) => {
      if (user.email === form.value.email) {
        this.isChecked = true;
      }
    });
    if (form.valid && !this.isChecked) {
     console.log(form.value); 
    } else {
      form.control.markAllAsTouched()
    }
  }
}