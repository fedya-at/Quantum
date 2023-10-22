import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {

  username!: string;
  password!: string;
  confirmPassword!: string;
  hidePassword: boolean = true;

  constructor(private rourter : Router)
  {}

  register() {
    if (this.username && this.password && this.confirmPassword && this.password === this.confirmPassword) {
      // Ajoutez votre logique d'enregistrement ici
      console.log('Inscription en cours...');
    } else {
      console.log('Formulaire invalide');
    }
  }


  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

}
