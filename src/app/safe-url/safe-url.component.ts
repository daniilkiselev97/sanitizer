import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'safe-url',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './safe-url.component.html',
  styleUrl: './safe-url.component.css'
})
export class SafeUrlComponent {
  public videoUrl: FormControl<string | null> = new FormControl('')
  public safeUrl!: SafeResourceUrl
  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  public updateUrl(): void {
    const url = this.videoUrl.value
    if(url){
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url)
      //https://www.youtube.com/embed/dQw4w9WgXcQ
      // this.safeUrl = url
      //Error: NG0904: unsafe value used in a resource URL context - without sanitizer
    }
  }

}
