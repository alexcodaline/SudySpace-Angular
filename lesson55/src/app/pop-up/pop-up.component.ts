import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
    members = 0;
    nameGroup = "";
    @Output() close = new EventEmitter;
}
