import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SanitizerExampleComponent } from './sanitizer-example/sanitizer-example.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SanitizerExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sanitizer';
}
