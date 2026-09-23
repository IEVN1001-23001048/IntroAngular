<<<<<<< HEAD
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = "GarciaRodarteDaniel";
  duplicaNumero(n1:number):number{
    return n1*2
  }
  pelicula={
    titulo:"Spider man",
    fechaLanzamiento:new Date(),
    precio:1234
  }
}
=======
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = "GarciaRodarteDaniel";
  duplicaNumero(n1:number):number{
    return n1*2
  }
  pelicula={
    titulo:"Spider man",
    fechaLanzamiento:new Date(),
    precio:1234
  }
}
>>>>>>> c3cbf765260833966bd5202b5863a46d97cc8e1c
