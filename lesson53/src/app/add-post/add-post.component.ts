import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
    @Output() onPost = new EventEmitter();

    titleInputValue = '';
    textInputValue = '';
    avatarInputValue = '';

    onTitle(event: any) {
        this.titleInputValue = event.target.value;
    }

    onText(event: any) {
        this.textInputValue = event.target.value;
    }
    onAvatar(event:any){
        this.avatarInputValue = event.target.value;
    }

    addPost(titleValue: string, textValue: string, avatarValue:string) {
        const validText = this.textInputValue.slice(0, 50);
        const value = {
            title: titleValue,
            text: validText,
            avatar: avatarValue
        }

        this.onPost.emit(value)
        this.clear();
    }

    clear() {
        this.titleInputValue = '';
        this.textInputValue = '';
        this.avatarInputValue = '';
    }
}