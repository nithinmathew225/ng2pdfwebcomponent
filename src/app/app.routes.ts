import { Routes } from '@angular/router';
import { Ng2PdfViewerComponent } from './ng2-pdf-viewer/ng2-pdf-viewer.component';

export const routes: Routes = [
    {
      path: '',
      component: Ng2PdfViewerComponent,
      title: 'Ng2-pdf-viewer',
    },
    {
      path: 'pdfviewer',
      component: Ng2PdfViewerComponent,
      title: 'Ng2-pdf-viewer',
    },
  ];
