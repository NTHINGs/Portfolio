import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingAnimationComponent } from './landing-animation/landing-animation.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingAnimationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
