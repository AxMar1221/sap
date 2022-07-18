import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent implements OnInit {

  heroes:any[] = [];
  termino!: string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( params => {
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroe( params['termino']);
      })
  }
}