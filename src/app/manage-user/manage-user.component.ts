import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.type';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthentificactionService } from '../authentificaction.service';

@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.scss',
})
export class ManageUserComponent {
  http: HttpClient = inject(HttpClient);
  snackBar: MatSnackBar = inject(MatSnackBar);
  userList: User[] = [];
  authentification: AuthentificactionService = inject(AuthentificactionService);

  ngOnInit() {
    this.refresh();
  }

  refresh(): void {
    this.http
      .get<User[]>('http://admin-backend-angular/list-user.php')
      .subscribe((result) => (this.userList = result));
  }

  onDeleteUser(userId: number) {
    this.http
      .delete('http://admin-backend-angular/delete-user.php?id=' + userId)
      .subscribe({
        next: (result) => {
          this.refresh();
          this.snackBar.open("L'utilisateur a bien été supprimé", undefined, {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: 'valid',
          });
        },
        error: (result) => {
          this.refresh();
          this.snackBar.open(
            'Erreur inconnue, contactez votre administrateur',
            undefined,
            {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: 'error',
            },
          );
        },
      });
  }
}
