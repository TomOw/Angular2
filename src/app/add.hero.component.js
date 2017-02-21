"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by tomow on 21.02.17.
 */
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var hero_1 = require("./hero");
var common_1 = require("@angular/common");
var AddHeroComponent = (function () {
    function AddHeroComponent(heroService, location) {
        this.heroService = heroService;
        this.location = location;
    }
    AddHeroComponent.prototype.ngOnInit = function () {
        this.newHero = new hero_1.Hero(this.heroService.getLastId() + 1);
    };
    AddHeroComponent.prototype.addHero = function (hero) {
        this.heroService.addHero(hero);
        this.location.back();
    };
    AddHeroComponent = __decorate([
        core_1.Component({
            selector: 'add-hero',
            templateUrl: '../app/add.hero.component.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, common_1.Location])
    ], AddHeroComponent);
    return AddHeroComponent;
}());
exports.AddHeroComponent = AddHeroComponent;
//# sourceMappingURL=add.hero.component.js.map