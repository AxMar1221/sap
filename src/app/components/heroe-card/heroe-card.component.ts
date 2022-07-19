import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index!: number;
  
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private _router:Router ) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe( ){
    this.heroeSeleccionado.emit( this.index )
    // this._router.navigate( ['/heroe', this.index ] )
  }

}
