import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IResortInfo, ResortInfoType} from '../interfaces/resortInfo';
import {delay} from 'rxjs/operators';










const mockData: IResortInfo[] = [
  {
    id: 1,
    img: '1.jpg',
    address: 'Sed perspiciatis',
    phone: 1285968685,
    weather: {
      title: 'Et harum quidem',
      icon: 'cloud',
      water: 26,
      temperature: 27
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'b1.jpg',
      followers: 2850,
      following: 675,
    },
    type: ResortInfoType.hotel
  },

  {
    id: 2,
    img: '3.jpg',
    address: 'Sed perspiciatis2',
    phone: 1274858693,
    weather: {
      title: 'Et harum quidem2',
      icon: 'cloud',
      water: 10,
      temperature: 16
    },
    social_info: {
      title: 'Nam libero voluptatem2',
      img: 'b3.jpg',
      followers: 3283,
      following: 3459,
    },
    type: ResortInfoType.hotel
  },
  {
    id: 3,
    img: '3.jpg',
    address: 'tour type 1',
    phone: 1274858693,
    weather: {
      title: 'Et harum quidem2',
      icon: 'cloud',
      water: 10,
      temperature: 16
    },
    social_info: {
      title: 'Nam libero voluptatem2',
      img: 'b3.jpg',
      followers: 3283,
      following: 3459,
    },
    type: ResortInfoType.tour
  },
  {
    id: 4,
    img: '3.jpg',
    address: 'fishing type 1',
    phone: 1274858693,
    weather: {
      title: 'Et harum quidem2',
      icon: 'cloud',
      water: 10,
      temperature: 16
    },
    social_info: {
      title: 'Nam libero voluptatem2',
      img: 'b3.jpg',
      followers: 3283,
      following: 3459,
    },
    type: ResortInfoType.fishing
  }
];



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getResort(id: number): Observable<IResortInfo> {
    return of(mockData.find(item => item.id === id));
  }

  getResorts(filter: string): Observable<IResortInfo[]> {
    if (filter) {
      return of(mockData.filter(item => item.type === filter)).pipe(delay(1000));
    }

    return of(mockData).pipe(delay(1000));
  }
}
