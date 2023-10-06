import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent {
    @Input() title = '';
    @Input() text = '';
    @Input() avatar = '';

    deletePost() {
        this.title = '';
        this.text = '';
        this.avatar = '';
      }
  }