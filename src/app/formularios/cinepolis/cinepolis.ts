import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
   nombre:string ="";
  cantBoletas: number = 0;
  compradores: number = 0;
  boletas: number = 12;
  total:number = 0;
  cineco:boolean=false;

  compra(): void {
    const cantidad = Number(this.cantBoletas);
    const   Maxboleta: number = 7*this.compradores;
    const nombre: string = this.nombre.trim();
    if(nombre === "")
      alert('Ingrese un nombre de comprador');
    else if (this.compradores <= 0) {
      alert('Ingrese un numero de compradores valido');
    }
    else if (cantidad <= 0) {
      alert('Ingrese un numero de boletas valido');
    }
    else{

    if (cantidad > Maxboleta) {
      alert('Compra no permitida, maximo 7 boletas por comprador');
    } else {
      
      alert('Compra válida');
    

    switch (true) {
      case (cantidad > 0 && cantidad < 3 ):
        this.total= cantidad * this.boletas;

        break;
       
      case (cantidad > 2 && cantidad< 6):
        this.total= cantidad * this.boletas * 0.9;
      break;

      case (cantidad > 5 ):
        this.total = cantidad * this.boletas * 0.85;
        break;
      default:
        alert('Cantidad no permitida');
        break;
    }
    if (this.cineco === true){
      this.total = this.total * 0.9;
    }
      else{
      this.total = this.total;
      }
    }
  
  }
}
salir(): void {
  this.nombre="";
  this.cantBoletas = 0;
  this.compradores = 0;
  this.total = 0;
  this.cineco = false;
}
}