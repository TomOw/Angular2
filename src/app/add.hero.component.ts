/**
 * Created by tomow on 21.02.17.
 */
import {Component, OnInit} from "@angular/core";
import {HeroService} from "./hero.service";
import {Hero} from "./hero";

@Component({
  selector: 'add-hero',
  templateUrl: '../app/add.hero.component.html'
})

export class AddHeroComponent implements OnInit {


  ngOnInit(): void {
    this.newHero = new Hero(this.heroService.getLastId() + 1);
  }

  constructor(private heroService: HeroService){}

  newHero: Hero;

  addHero(hero: Hero): void {
    this.heroService.addHero(hero);
  }
}
