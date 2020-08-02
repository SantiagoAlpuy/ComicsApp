import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  isMarvel:boolean = false;
  heroe:Heroe;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['heroName']);
      if (this.heroe.casa.toLowerCase() == 'marvel'){
        this.isMarvel = true;
      }
        console.log(this.heroe);
    });
   }


}
