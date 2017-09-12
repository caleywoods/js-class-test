/*
  Since we've exported Animal as the default in animal.js
  we can call this import whatever we want, it's not a named import.

  However, whatever you call this here on the import must be what you
  use on line 10 to instantiate the new animal class. If I import this
  as Gorilla then I have to say new Gorilla( 'Harambe' ) on L#11
*/
import Animal from './base-classes/animal';
import { Rambo } from './base-classes/rambo';

const mainRambo = new Rambo;

mainRambo.add_weapon('Compound Bow');

/*
  This will only log the compound bow. In animal.js we gave him an M60 but
  that is a separate import.
*/
console.log( `This is the rambo from zoo.js file: Rambo is using a ${mainRambo.arsenal}` );

const tiger = new Animal( 'Tony' );
