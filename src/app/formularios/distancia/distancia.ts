import { Component } from '@angular/core'; 
 
@Component({ 
  selector: 'app-distancia', 
  standalone: false, 
  templateUrl: './distancia.html', 
}) 
export class Distancia { 
  x1: number = 0; 
  y1: number = 0; 
  x2: number = 0; 
  y2: number = 0; 
   
  // Usamos null para que la alerta no aparezca hasta que se calcule 
  distancia: number | null = null; 
 
  calcularDistancia() { 
    // Aseguramos que los valores sean tratados como números 
    const px1 = Number(this.x1);