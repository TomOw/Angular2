/**
 * Created by tomow on 20.02.17.
 */
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
var core_1 = require("@angular/core");
var HeroService = (function () {
    function HeroService() {
        this.heroes = [
            { id: 11, name: 'Mr. Nice', newName: '', history: [] },
            { id: 12, name: 'Narco', newName: '', history: [] },
            { id: 13, name: 'Bombasto', newName: '', history: [] },
            { id: 14, name: 'Celeritas', newName: '', history: [] },
            { id: 15, name: 'Magneta', newName: '', history: [] },
            { id: 16, name: 'RubberMan', newName: '', history: [] },
            { id: 17, name: 'Dynama', newName: '', history: [] },
            { id: 18, name: 'Dr IQ', newName: '', history: [] },
            { id: 19, name: 'Magma', newName: '', history: [] },
            { id: 20, name: 'Tornado', newName: '', history: [] }
        ];
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(this.heroes);
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes().then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.addHero = function (hero) {
        this.heroes.push(hero);
    };
    HeroService.prototype.getLastId = function () {
        return this.heroes[this.heroes.length - 1].id;
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map