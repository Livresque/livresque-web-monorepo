import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NxWelcome } from './nx-welcome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NxWelcome],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'livresque-management';
}
