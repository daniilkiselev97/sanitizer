import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'api-sanitizer',
  standalone: true,
  imports: [],
  templateUrl: './api-sanitizer.component.html',
  styleUrl: './api-sanitizer.component.css'
})
export class ApiSanitizerComponent implements OnInit {
  public sanitizedContent!: SafeHtml

  constructor(
    // private _sanitized: DomSanitizer,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this._http.get('assets/content.json').subscribe((resp) => console.log(resp))
  }


}
