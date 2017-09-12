class Animal {
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