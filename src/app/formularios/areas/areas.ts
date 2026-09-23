import { Component } from '@angular/core';


@Component({
  selector: 'app-areas',
  standalone: false,  
  templateUrl: './areas.html'
})
export class AreasComponent {

  areaTriangulo: number =0;
  areaRectangulo: number =0;
  areaCirculo: number =0;
  areaPentagono: number =0;
  r:number =0;
  apotema:number=0;
  base:number=0;
 
  calcularTriangulo(base: string, altura: string) {
    this.areaTriangulo = (+base * +altura) / 2;
  }

  calcularRectangulo(base: string, altura: string) {
    this.areaRectangulo = +base * +altura;
  }

  calcularCirculo(radio: string) {
    this.areaCirculo = Math.PI * (this.r ** 2);
  }

  calcularPentagono(base: string, apotema: string) {
  this.areaPentagono = ((this.base+5)* this.apotema) / 2;
  }
}