import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  providers: [AuthService],
  imports: [CommonModule, RouterLink],
  template: `
    <h1>Dashboard</h1>
    <hr />

    <h3>User</h3>
    <pre>{{ user() | json }}</pre>
    <br />
    @if (user()) {
      <button (click)="onLogout()">Cerrar Sesión</button>
    }@else{
      <span routerLink="/auth/login">Ir a login</span>
    }

  `,
  styleUrl: './dashboardLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  private authSvc: AuthService = inject(AuthService);
  user = computed(() => this.authSvc.currentUser());

  onLogout(): void {
    this.authSvc.logout();
  }
}
