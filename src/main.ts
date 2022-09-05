import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const users = {
  data: [
    {
      status: 'active',
      age: 14,
    },
    {
      status: 'active',
      age: 20,
    },
    {
      status: 'inactive',
      age: 43,
    },
    {
      status: 'inactive',
      age: 73,
    },
  ],
};
const users2 = {
  data: [
    {
      status: 'active',
      age: 14,
    },
    {
      status: 'active',
      age: 24,
    },
    {
      status: 'inactive',
      age: 43,
    },
    {
      status: 'inactive',
      age: 73,
    },
  ],
};

const observable = new Observable((subscriber) => {
  subscriber.next(users2);
}).pipe(
  map((value: any) => {
    console.log('1) data from observable: ', value);

    return value.data;
  }),
  map((value: any) => {
    console.log('2) data from operator: ', value);

    return value.filter((user: any) => user.status === 'active');
  }),
  map((value: any) => {
    console.log('3) data from operator: ', value);
    return (
      value.reduce((acc: any, currentValue: any) => {
        return acc + currentValue.age;
      }, 0) / value.length
    );
  }),
  map((value: any) => {
    console.log('4) data from operator: ', value);
      if (value < 18) {
        throw new Error("Average age is too young");
      }
    return value;
  })
);

const observer = {
  next: (value: any) => {
    console.log('Observer got a value of: ', value);
  },
  error: (err: any) => {
    console.error('Observer got an error of: ', err);
  },
  complete: () => {
    console.log('Observer got a complete notification');
  },
};

observable.subscribe(observer);
