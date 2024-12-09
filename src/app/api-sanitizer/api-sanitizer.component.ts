import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { catchError, of } from 'rxjs';

interface IResponce {
  content: string
}

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
    private _sanitized: DomSanitizer,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this._http.get<IResponce>('assets/content.json').pipe(
      catchError((err) => {
        console.error('Ошибка при загрузке:', err)
        return of({ content: '<p>Загрузка данных не удалась</p>' })
      })
    ).subscribe(({ content }) => this.sanitizedContent = this._sanitized.bypassSecurityTrustHtml(content))
  }


}
