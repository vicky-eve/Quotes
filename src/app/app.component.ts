import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote :string [];
  constructor(){
    this.quote = ['quote', 'author', 'name']
  }
}
