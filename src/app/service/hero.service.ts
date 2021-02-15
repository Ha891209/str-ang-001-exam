import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    { id: 1, name: 'David Kopis', superPower: 'supersmart', address: 'St.Miklos' },
    { id: 2, name: 'Merse Kopis', superPower: 'supercute', address: 'St.Miklos' },
    { id: 3, name: 'Annie Kopis', superPower: 'supermom', address: 'St.Miklos' },
    { id: 4, name: 'Steve Koros', superPower: 'bestgrandpa', address: 'Mezotur' },

  ];

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }

}