/*
  Named import, must be imported as:
    import { Rambo } from './base-classes/rambo';
*/
export class Rambo {
  constructor() {
    this.name     = 'John Rambo';
    this.colonel  = 'Col Trout';
    this.weapons  = [];
  }

  add_weapon( weapon ) {
    this.weapons.push( weapon );
    return this.weapons;
  }

  get arsenal() {
    return this.weapons;
  }
}