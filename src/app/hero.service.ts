import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { mockHeros } from './mock/mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }

  /* getHeros(): Hero[] {
    return mockHeros;
  } */

  getHeros(): Observable<any> {
    // 将 1, 2, 3 封装成 Observable 实例
      return new Observable(observer => {
        setTimeout(() => {
          observer.next(123);
        }, 100);
      });
  }
}
