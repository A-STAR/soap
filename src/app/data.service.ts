import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { NavigationData, DATA } from './data.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getNavigationData(): Observable<NavigationData> {
    return of(DATA);
  }

}
