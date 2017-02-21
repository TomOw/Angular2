/**
 * Created by tomow on 20.02.17.
 */

import {Component, OnInit} from "@angular/core";
import {HeroService} from "./hero.service";
import {Hero} from "./hero";
@Component({
  selector: 'heroes-list',
  template: `
    <h1>heroes List</h1>
    <ul class="heroes">
      <a *ngFor="let hero of heroes" [routerLink]="['/detail', hero.id]">
        <li [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span>{{hero.name}}
        </li>
      </a>
    </ul>`,
  styleUrls: ['../app/heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  heroes: Hero[];

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero){
    console.log('selected: ' + hero.name + ' id: ' + hero.id);
  }
}
