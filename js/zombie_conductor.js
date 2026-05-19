/* Zombie conductor: enemigo lineal que puede moverse en horizontal o vertical. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov)
  this.direccion = direccion;
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.mover = function() {

  if(this.direccion == 'h') {
    this.x += this.velocidad;
  }

  if(this.direccion == 'v') {
    this.y += this.velocidad;
  }
  /* En esta parte lo que hacemos es invertir la direccion horizontal si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if (this.direccion == "h" && ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX))) {
    this.velocidad *= -1;
  }
  // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
  if (this.direccion == "v" && ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY))) {
    this.velocidad *= -1;
  }
}

ZombieConductor.prototype.atacar = function (jugador) {
  jugador.perderVidas(jugador.vidas);
}
