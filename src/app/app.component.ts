import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent {
  modalOpen = false;
  pos;
  openModal(e){
    this.modalOpen = true;
    document.querySelector('body').classList.add('body-overflow-hidden');
    this.pos = Math.abs(document.querySelector('body').getBoundingClientRect().top) +100;
    // this.pos = e.pageY;
    console.log(this.pos);
  }
  closeModal(){
    this.modalOpen = false;
    document.querySelector('body').classList.remove('body-overflow-hidden');
  }
}
