import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeasonTemplate } from './season-template/season-template';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SeasonTemplate],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('stardew-track');
}
