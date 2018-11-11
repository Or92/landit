import { FormService } from './../form.service';
import { Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as uuid from 'uuid';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
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
export class ModalComponent implements OnInit {
  @ViewChild('phone') phone: ElementRef;
  @ViewChild('name') name: ElementRef;

  @Output() exit = new EventEmitter();
  success = false;
  height;
  width;
  constructor(private formService: FormService) {
    let body = document.querySelector('body');
    this.height = body.getBoundingClientRect().height;
    this.width = body.getBoundingClientRect().width;
  }

  ngOnInit() {
  }
  send() {
    let data: any = {
      name: this.name.nativeElement.value,
      phone: this.phone.nativeElement.value,
    };
    if (data.name && data.phone && data.phone.length === 10) {
      data.id = uuid();
      this.formService.sendFormData(data).subscribe(data => {
        this.success = true;
        setTimeout(() => this.exit.emit(), 3000);
      }, err => {
        this.success = true;
        setTimeout(() => this.exit.emit(), 3000);
      });
    }
  }
  close() {
    this.exit.emit();
  }

}
