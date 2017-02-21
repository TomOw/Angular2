/**
 * Created by tomow on 20.02.17.
 */

import {Injectable} from "@angular/core";
import {Hero} from "./hero";

@Injectable()
export class HeroService {

  heroes: Hero[] = [
    {id: 11, name: 'Mr. Nice', newName: '', history: []},
    {id: 12, name: 'Narco', newName: '', history: []},
    {id: 13, name: 'Bombasto', newName: '', history: []},
    {id: 14, name: 'Celeritas', newName: '', history: []},
    {id: 15, name: 'Magneta', newName: '', history: []},
    {id: 16, name: 'RubberMan', newName: '', history: []},
    {id: 17, name: 'Dynama', newName: '', history: []},
    {id: 18, name: 'Dr IQ', newName: '', history: []},
    {id: 19, name: 'Magma', newName: '', history: []},
    {id: 20, name: 'Tornado', newName: '', history: []}
  ];

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(this.heroes);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  addHero(hero: Hero): void {
    this.heroes.push(hero);
  }

  getLastId(): number {
    return this.heroes[this.heroes.length - 1].id;
  }


}
