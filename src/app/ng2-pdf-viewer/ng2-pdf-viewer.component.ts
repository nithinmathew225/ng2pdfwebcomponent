import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-ng2-pdf-viewer',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './ng2-pdf-viewer.component.html',
  styleUrl: './ng2-pdf-viewer.component.css'
})
export class Ng2PdfViewerComponent implements OnInit {
  
  @Input() pdfURL : string = '';
  @Input() zoomto : number = 1.0;
  @Input() pageVariable : number = 1;
  @Input() originalsize : boolean = true;
  @Input() fittopage : boolean = true;
  @Input() showall : boolean = true;
  @Input() rendertext : boolean = true;

  constructor(
    private sanitizer: DomSanitizer
    ) { }
  
  ngOnInit(): void {

  }

  createSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
