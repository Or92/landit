import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class ModalComponent implements OnInit {
@Output() exit = new EventEmitter();
success = false;
height;
width;
  constructor() {
    let body = document.querySelector('body');
    this.height = body.getBoundingClientRect().height;
    this.width = body.getBoundingClientRect().width;
   }

  ngOnInit() {
  }
send(){
  this.success = true;
  setTimeout(() => this.exit.emit(), 3000);
}
  close(){
    this.exit.emit();
  }

}
