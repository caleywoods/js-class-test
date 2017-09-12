import { Rambo } from './rambo';

const rambo = new Rambo;

rambo.add_weapon('M60 - Beltfed Machine Gun');

console.log( `This is the rambo from animal class: Rambo is using an ${rambo.arsenal}` );
/*
  Here we're exporting the Animal class as default which means
  people can import it named anything they like.

  If you wanted to force people to  have to import with the name
  Animal in their import statement then remove the default keyword.

  You would then import this with the following syntax (note the braces
  which are required for named imports):
    import { Animal } from './base-classes/animal';
*/
export default class Animal {
  constructor( name ) {
    this.name   = name;
    this.thirst = 50;
    this.belly  = [];
  }

  eat( food ) {
    this.belly.push( food );
    return this.belly;
  }

  /*
    calling drink replenishes 10 points of thirst
  */
  drink() {
    this.thirst += 10;
  }
}