import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Observable } from 'rxjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const observable = new Observable((subscriber) => {
  subscriber.next(10);
  subscriber.next(11);
  subscriber.next(12);
});

const observer = {
  next: (value: any) => {
    console.log('Observer got a value of: ', value);
  },
  error: (err: any) => {
    console.log('Observer got an error of: ', err);
  },
  complete: () => {
    console.log('Observer got a complete notification');
  },
};

observable.subscribe(observer);
