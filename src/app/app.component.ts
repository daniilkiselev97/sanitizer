import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SanitizerExampleComponent } from './sanitizer-example/sanitizer-example.component';
import { BrowserModule } from '@angular/platform-browser';
import { SafeUrlComponent } from './safe-url/safe-url.component';
import { ApiSanitizerComponent } from './api-sanitizer/api-sanitizer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SanitizerExampleComponent, SafeUrlComponent, ApiSanitizerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sanitizer';
}
