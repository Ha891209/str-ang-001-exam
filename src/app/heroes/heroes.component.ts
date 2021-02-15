import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  order: string = '';
  phrase: string = '';

  cols: string[] = Object.getOwnPropertyNames(new Hero());

  heroes$: BehaviorSubject<Hero[]> = this.hService.list$;

  constructor(
    private hService: HeroService,
  ) { }

  ngOnInit(): void {
    this.hService.getAll();
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
  onChangeColumn(column: string): void {
    this.order = column;
  }
}