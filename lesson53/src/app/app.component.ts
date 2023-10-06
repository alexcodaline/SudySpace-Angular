import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {

    post = {title: '', text: '', avatar:''}

    addPost(newPost: any) {
        this.post.title = newPost.title;
        this.post.text = newPost.text;
        this.post.avatar = newPost.avatar;
    }

   
    chartAmount = 0;

    ngOnInit() {
        this.chartAmount = this.post.text.length;
    }

    ngDoCheck() {
        this.chartAmount = this.post.text.length;
    }

    
}

