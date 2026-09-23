import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.html'
})
export class usuariosComponent {

  validarUsuario(usuario: string, contrasena: string) {
    
    if (usuario === 'admin' && contrasena === '1234') {
      alert('¡Bienvenido! Iniciaste sesión correctamente.');
    } else {
      alert('Error: El usuario o la contraseña son incorrectos.');
    }
    
  }
}