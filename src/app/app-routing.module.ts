/**
 * Created by tomow on 20.02.17.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent}   from './dashboard.component';
import {HeroesComponent}      from './heroes.component';
import {HeroComponent}  from './hero.component';
import {AddHeroComponent} from "./add.hero.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'add', component: AddHeroComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
