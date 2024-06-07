import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthentificactionService {
  id?: number;
  firstname?: string;
  lastname?: string;
  role?: string;

  connect() {
    const jwt = localStorage.getItem('jwt');
    if (jwt != null) {
      const jwtPart = jwt.split('.');
      const jwtBodyBase64 = jwtPart[1];
      const jsonBody = window.atob(jwtBodyBase64);
      const body = JSON.parse(jsonBody);

      this.id = body.id;
      this.firstname = body.firstname;
      this.lastname = body.lastname;
      this.role = body.role;
    } else {
      this.id = undefined;
      this.firstname = undefined;
      this.lastname = undefined;
      this.role = undefined;
    }
  }

  disconnect() {
    localStorage.removeItem('jwt');
    this.id = undefined;
    this.firstname = undefined;
    this.lastname = undefined;
    this.role = undefined;
  }
}
