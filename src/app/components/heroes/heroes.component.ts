import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  constructor( private _heroesService:HeroesService,
               private router:Router ) { }

  heroes:Heroe[] = [];

  ngOnInit(){
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( heroName:string ){
    this.router.navigate( ['/heroe', heroName] );
    // this.heroeSeleccionado.emit(heroName);
  }

}
