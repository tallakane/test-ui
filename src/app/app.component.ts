import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { OrdersComponent } from './orders/orders/orders.component';
// import { OrdersComponent } from './orders/orders.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatBadgeModule, OrdersComponent], // OrdersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  topNav = [
    { icon: 'space_dashboard', label: 'Dashboard', active: false },
    { icon: 'assignment', label: 'Orders', active: true },
    { icon: 'factory', label: 'Production', active: false },
    { icon: 'edit_note', label: 'NotePad', active: false },
  ];
  bottomNav = [
    { icon: 'settings', label: 'Settings' },
    { icon: 'hub', label: 'Integration' },
    { icon: 'logout', label: 'Sign out' },
  ];
}
