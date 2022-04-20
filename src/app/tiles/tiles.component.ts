import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss'],
})
export class TilesComponent implements OnInit {
  tile1switch = true;
  tile2switch = true;
  tile3switch = true;
  tile4switch = true;
  tile5switch = true;
  tile6switch = true;

  constructor() {}

  ngOnInit(): void {}

  onTile1Click() {
    this.tile1switch = !this.tile1switch;
  }
  
  onTile2Click() {
    this.tile2switch = !this.tile2switch;
  }
  onTile3Click() {
    this.tile3switch = !this.tile3switch;
  }
  onTile4Click() {
    this.tile4switch = !this.tile4switch;
  }
  onTile5Click() {
    this.tile5switch = !this.tile5switch;
  }
  onTile6Click() {
    this.tile6switch = !this.tile6switch;
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }
}
