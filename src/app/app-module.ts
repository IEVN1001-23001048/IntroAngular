import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms'; // <-- 1. Agregado para usar ngModel
=======
>>>>>>> c3cbf765260833966bd5202b5863a46d97cc8e1c
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { OperasBas } from './formularios/operas-bas/operas-bas';
import { Distancia } from './formularios/distancia/distancia';
<<<<<<< HEAD
import { AreasComponent } from './formularios/areas/areas';
import { usuariosComponent } from './formularios/usuarios/usuarios';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';

@NgModule({
  declarations: [App, HeroesList, HeroesFilterPipe, OperasBas, Distancia, AreasComponent],
  

  imports: [BrowserModule, AppRoutingModule, FormsModule, usuariosComponent],
  
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
=======

@NgModule({
  declarations: [App, HeroesList, OperasBas, Distancia],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
>>>>>>> c3cbf765260833966bd5202b5863a46d97cc8e1c
