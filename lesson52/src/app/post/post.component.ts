import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  title = 'High-Perfomance Computing';
  text =
    'High-perfomance computing (HPC) is the ability to process data and perfom complexcalculations at hight speeds.HPC is one of the most essential tools fueling the advancement of computational science.';
}
