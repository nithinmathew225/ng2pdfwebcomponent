import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { Ng2PdfViewerComponent } from './app/ng2-pdf-viewer/ng2-pdf-viewer.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

(async () => {
  const app = await createApplication({
    providers: [],
  });

  const inputElement = createCustomElement(Ng2PdfViewerComponent, {
    injector: app.injector,
  });
  customElements.define('pdf-viewernew', inputElement);
})();