import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User.type';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent {
  roles: string[] = ['Admin', 'Teacher', 'Student'];

  formBuilder: FormBuilder = inject(FormBuilder);

  formulaire: FormGroup = this.formBuilder.group({});

  http: HttpClient = inject(HttpClient);
  snackBar: MatSnackBar = inject(MatSnackBar);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  userId?: number;

  ngOnInit() {
    this.route.params.subscribe((urlParams) => {
      // s'il y a bien un parametre dans l'url et que c'est un nombre
      if (urlParams['id'] && !isNaN(urlParams['id'])) {
        // nouveau formGroup sans validateur pour le password
        this.formulaire = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', []],
          firstname: ['', [Validators.required]],
          lastname: ['', [Validators.required]],
          role: ['Student', [Validators.required]],
        });

        this.http
          .get<User>(
            'http://admin-backend-angular/get-user.php?id=' + urlParams['id'],
          )
          .subscribe({
            next: (user: User) => {
              this.formulaire.patchValue(user);
              this.userId = user.id;
            },
            error: () => {
              alert('Erreur inconnue contactez votre administrateur');
            },
          });
      } else {
        this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]],
          firstname: ['', [Validators.required]],
          lastname: ['', [Validators.required]],
          role: ['Student', [Validators.required]],
        });
      }
    });
  }

  onSubmit() {
    if (this.formulaire.valid) {
      // s'il n'y a pas d'id dans l'url → ajout, sinon → modifications
      const url: string =
        this.userId == null
          ? 'http://admin-backend-angular/add-user.php'
          : 'http://admin-backend-angular/edit-user.php?id=' + this.userId;

      this.http.post(url, this.formulaire.value).subscribe({
        next: (result) => {
          this.snackBar.open("L'utilisateur a bien été ajouté", undefined, {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: 'valid',
          });
          this.router.navigateByUrl('/manage-user');
        },
        error: (result) => {
          alert('Erreur inconnue contactez votre administrateur');
        },
      });
    }
  }
}
