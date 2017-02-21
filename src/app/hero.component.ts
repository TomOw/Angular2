/**
 * Created by tomow on 20.02.17.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: './hero.component.html',
  styleUrls: ['../app/hero.component.css']
})

export class HeroComponent implements OnInit {

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  @Input()
  hero: Hero;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
