import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventEmitter } from '@angular/core';


interface User {
  username: string;
  password: string;
  rol: string;
  qrEscaneado: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public autenticado: boolean = false;
  public rol: string = '';
  public username: string = ''; // Agrega la propiedad username
  public usuarioActualizado: EventEmitter<string> = new EventEmitter<string>();


  private local!: Storage;

  constructor(private router: Router, private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.local = storage;

    const users: User[] = [
      {
        username: 'dontaka@profesor.duoc.cl',
        password: 'taka123',
        rol: 'profesor',
        qrEscaneado: false,
      },
      {
        username: 'juan.gom@duocuc.cl',
        password: 'juan123',
        rol: 'alumno',
        qrEscaneado: false,
      },
      {
        username: 'di.sanchez@duocuc.cl',
        password: 'diego123',
        rol: 'alumno',
        qrEscaneado: false,
      },
      {
        username: 'vic.moralesl@duocuc.cl',
        password: 'vicente123',
        rol: 'alumno',
        qrEscaneado: false,
      },
      {
        username: 'user', //PRUEBAS
        password: '',
        rol: 'alumno',
        qrEscaneado: false,
      },
      {
        username: 'admin', //PRUEBAS
        password: '',
        rol: 'profesor',
        qrEscaneado: false,
      },
    ];

    await this.local.set('users', users);
  }

  async login(username: string, password: string): Promise<boolean> {
    if (!this.local) {
      return false; // Manejo de error: almacenamiento no inicializado
    }

    const users: User[] = (await this.local.get('users')) || [];
    const user = users.find((us) => us.username === username && us.password === password);

    if (user) {
      this.autenticado = true;
      this.rol = user.rol;
      this.username = user.username; // Asigna el valor del nombre de usuario

      return true;
    }

    this.autenticado = false;
    return false;
  }

  logout() {
    this.autenticado = false;
    this.rol = '';
    this.router.navigate(['/login']);
  }
  async verificarCorreo(correo: string): Promise<boolean> {
    const users: User[] = (await this.local.get('users')) || [];
    const correoExistente = users.some((us) => us.username === correo);
    return correoExistente;
  }

  async actualizarQREscaneado(username: string) {
    const users: User[] = (await this.local.get('users')) || [];
    const userIndex = users.findIndex((us) => us.username === username);
  
    if (userIndex !== -1) {
      users[userIndex].qrEscaneado = true;
      this.local.set('users', users);

      // Emitir evento de actualización
      this.usuarioActualizado.emit(username);
    }
  }
  

}
