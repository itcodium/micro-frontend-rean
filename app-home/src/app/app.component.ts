import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { singleSpaPropsSubject } from '../single-spa/single-spa-props';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-home';
  singleSpaProps$ = singleSpaPropsSubject.asObservable();
}
