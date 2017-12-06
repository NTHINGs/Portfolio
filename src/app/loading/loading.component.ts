// Component done thanks to https://www.mattboldt.com/typed.js/
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import Typed from 'typed.js';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations: [
    trigger('state', [
      state('inactive', style({
        opacity: 0
      })),
      state('active', style({
        opacity: 1
      })),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class LoadingComponent implements OnInit {
  state = 'active';
  @Output()
  finish = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    const typed = new Typed('#command', {
      strings: ['run portafolio^500 `</br>Installing components...` ^1000 `</br>Fetching from source...` ^2000 `</br>Building...` ^3000 ',
        '`<div class="ascii-art">`' +
        '`██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗\n`' +
        '`██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝\n`' +
        '`██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  \n`' +
        '`██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  \n`' +
        '`╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗\n`' +
        '` ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝\n`' +
        '`</div>` ^500'],
      typeSpeed: 50,
      onComplete: (self) => {
        this.toggleState();
      }
    });
  }

  animationDone(event) {
    if (event.fromState !== 'void') {
      this.finish.emit(true);
    }
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
