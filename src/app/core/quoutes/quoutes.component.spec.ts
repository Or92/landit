import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoutesComponent } from './quoutes.component';

describe('QuoutesComponent', () => {
  let component: QuoutesComponent;
  let fixture: ComponentFixture<QuoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
