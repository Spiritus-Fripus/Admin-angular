import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthentificactionService } from './authentificaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  authentification = inject(AuthentificactionService);
  snackBar: MatSnackBar = inject(MatSnackBar);

  ngOnInit() {
    this.authentification.connect();
  }

  onDisconnect() {
    this.authentification.disconnect();
    this.snackBar.open('Déconnexion réussit', undefined, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'valid',
    });
  }
}
