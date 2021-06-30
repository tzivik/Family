import { Component } from '@angular/core';
import { Parent } from './family/models/parent.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'family-client';
  parent:Parent=new Parent();
}
