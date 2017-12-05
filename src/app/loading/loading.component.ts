import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  typingEnds = false;

  @Output()
  finish = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    const typed = new Typed('#command', {
      strings: ['run portafolio^500 `</br>Installing components...` ^1000 `</br>Fetching from source...` ^2000 `</br>Building...` ^3000'],
      typeSpeed: 20,
      onComplete: (self) => {
        this.typingEnds = true;
        setTimeout(() => {
          this.finish.emit(true);
        }, 2000);
      }
    });
  }

}
