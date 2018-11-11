import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quoutes',
  templateUrl: './quoutes.component.html',
  styleUrls: ['./quoutes.component.scss']
})
export class QuoutesComponent implements OnInit {
@Input() name;
@Input() date;
@Input() comment;

  constructor() { }

  ngOnInit() {
  }

}
