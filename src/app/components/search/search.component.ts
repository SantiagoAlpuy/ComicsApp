import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];
  term:string;

  constructor( private activatedRoute:ActivatedRoute,
               private service:HeroesService,
               private router:Router) {

    this.activatedRoute.params.subscribe( params => {
      this.heroes = this.service.findHeroes( params['term']);
      this.term = params['term'];
    }) 

  }

  ngOnInit(): void {

  }

  verHeroe( heroName:string ){
    this.router.navigate( ['/heroe', heroName] );
  }
}
