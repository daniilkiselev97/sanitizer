import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'sanitizer-example',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sanitizer-example.component.html',
  styleUrl: './sanitizer-example.component.css'
})
export class SanitizerExampleComponent {
  public userInput!: FormControl
  public sanitizedContent: SafeHtml | null = null

  constructor(private sanitizer: DomSanitizer) {
    this.userInput = new FormControl('')
  }

  public sanitizeInput() {
    const rawInput = this.userInput.value
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(rawInput)
  }


}
