import { CanActivateFn, Router } from '@angular/router';
import { AuthentificactionService } from './authentificaction.service';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const teacherGuard: CanActivateFn = (route, state) => {
  const authentification: AuthentificactionService = inject(
    AuthentificactionService,
  );
  const router: Router = inject(Router);
  const snackBar: MatSnackBar = inject(MatSnackBar);

  if (authentification.role == 'Admin' || authentification.role == 'Teacher') {
    return true;
  } else {
    snackBar.open(
      "Impossible d'accéder à cette page , contactez votre administrateur",
      undefined,
      {
        duration: 10000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: 'error',
      },
    );
    return router.createUrlTree(['/connexion']);
  }
};
