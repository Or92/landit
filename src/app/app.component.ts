import { FormService } from './core/form.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { environment } from 'src/environments/environment';
import * as uuid from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class AppComponent {
  @ViewChild('phone') phone: ElementRef;
  @ViewChild('name') name: ElementRef;
  modalOpen = false;
  pos;
  success = false;

  constructor(private formService: FormService) {

  }

  openModal(e) {
    this.modalOpen = true;
    document.querySelector('body').classList.add('body-overflow-hidden');
    this.pos = Math.abs(document.querySelector('body').getBoundingClientRect().top) + 100;
    // this.pos = e.pageY;
    console.log(this.pos);
  }
  closeModal() {
    this.modalOpen = false;
    document.querySelector('body').classList.remove('body-overflow-hidden');
  }

  send() {
    if (!environment.production) {
      this.success = true;
      setTimeout(() => this.success = false,3000);
    }
    else {
      let data: any = {
        name: this.name.nativeElement.value,
        phone: this.phone.nativeElement.value,
      };
      if (data.name && data.phone && data.phone.length === 10) {
        data.id = uuid();
        this.formService.sendFormData(data).subscribe(data => {
          this.success = true;
          setTimeout(() => this.success = false,3000);
        }, err => {
          this.success = true;
          setTimeout(() => this.success = false,3000);
        });
      }
    }
  }
}
