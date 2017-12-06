import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaded = false;
  show(loaded) {
    console.log(loaded);
    this.loaded = loaded;
  }
}
