import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent}  from './app.component';
import {HeroComponent} from "./hero.component";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {AddHeroComponent} from "./add.hero.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroComponent
      },
      {
        path: 'add',
        component: AddHeroComponent
      }
    ])
  ],
  declarations: [AppComponent, HeroComponent, HeroesComponent, DashboardComponent, AddHeroComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
