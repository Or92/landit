import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ModalComponent } from './core/modal/modal.component';
import { SuccessComponent } from './core/success/success.component';
import { SlideshowComponent } from './core/slideshow/slideshow.component';
import { QuoutesComponent } from './core/quoutes/quoutes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    SuccessComponent,
    SlideshowComponent,
    QuoutesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
