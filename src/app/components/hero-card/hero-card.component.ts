import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@Angular/router';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

  @Input() heroe:any = {};

  @Output() heroeSeleccionado: EventEmitter<string>;

  constructor( private router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe( heroName:string ){
    // this.router.navigate( ['/heroe', heroName] );
    this.heroeSeleccionado.emit(heroName);
  }

}
