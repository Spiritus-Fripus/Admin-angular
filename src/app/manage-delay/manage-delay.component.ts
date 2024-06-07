import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { Delay } from '../models/Delay.type';
import { AuthentificactionService } from '../authentificaction.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-delay',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './manage-delay.component.html',
  styleUrl: './manage-delay.component.scss',
})
export class ManageDelayComponent {
  http: HttpClient = inject(HttpClient);
  delayList: Delay[] = [];
  authentification: AuthentificactionService = inject(AuthentificactionService);
}
