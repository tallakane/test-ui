import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { DetailsOrdersComponent } from '../details-orders/details-orders.component';
import { MatDialog } from '@angular/material/dialog';

interface Order {
  customer: string;
  urgent?: boolean;
  ref: string;
  icon: string;
  decoration: string;
  bottles: number;
  price: string;
  statusLabel: string;
  delivery: string;
  order: string;
  selected?: boolean;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  private dialog = inject(MatDialog);

  openAddOrder() {
    this.dialog.open(DetailsOrdersComponent, {
      width: '740px',
      maxWidth: '95vw',
      autoFocus: false,
    });
  }

  orders: Order[] = [
    {
      customer: 'Zara Perfumes',
      urgent: true,
      ref: 'BL_2024_05_22_001',
      icon: 'local_florist',
      decoration: 'Gold screen printing + zamac cap',
      bottles: 1000,
      price: '4 200 €',
      statusLabel: 'Pending...',
      delivery: '15/09/2026',
      order: 'CMD_2024_05_18_0156',
      selected: true,
    },
    {
      customer: 'Druni Perfumeries',
      ref: 'BL_2024_05_23_002',
      icon: 'liquor',
      decoration: 'Matte black lacquer + hot stamping',
      bottles: 20,
      price: '8 500 €',
      statusLabel: 'Sample sent',
      delivery: '18/09/2026',
      order: 'CMD_2024_05_19_0157',
    },
    {
      customer: 'Primor Perfumeries',
      ref: 'BL_2024_05_24_003',
      icon: 'wine_bar',
      decoration: 'Silver metallisation + laser engraving',
      bottles: 700,
      price: '12 750 €',
      statusLabel: 'Sample accepted',
      delivery: '22/09/2026',
      order: 'CMD_2024_05_20_0158',
    },
    {
      customer: 'Bodybell',
      ref: 'BL_2024_05_23_002',
      icon: 'water_drop',
      decoration: 'Blue gradient + white screen printing',
      bottles: 50,
      price: '8 500 €',
      statusLabel: 'In production...',
      delivery: '25/09/2026',
      order: 'CMD_2024_05_19_0187',
    },
    {
      customer: 'Julia Perfumería',
      urgent: true,
      ref: 'BL_2024_05_24_003',
      icon: 'local_florist',
      decoration: 'Sandblasting + gold label',
      bottles: 150,
      price: '4 200 €',
      statusLabel: 'Delivered',
      delivery: '01/10/2026',
      order: 'CMD_2024_05_20_0198',
    },
    {
      customer: 'Paco Perfumerías',
      ref: 'BL_2024_05_25_004',
      icon: 'spa',
      decoration: 'Powder pink lacquer + embossing',
      bottles: 200,
      price: '6 750 €',
      statusLabel: 'Sample rejected',
      delivery: '06/10/2026',
      order: 'CMD_2024_05_21_0205',
    },
    {
      customer: 'Perfumerías If',
      urgent: true,
      ref: 'BL_2024_05_24_003',
      icon: 'science',
      decoration: '360° UV printing + selective varnish',
      bottles: 150,
      price: '12 300 €',
      statusLabel: 'Returned',
      delivery: '10/10/2026',
      order: 'CMD_2024_05_20_0203',
    },
    {
      customer: 'Marvimundo',
      ref: 'BL_2024_05_24_007',
      icon: 'wine_bar',
      decoration: 'Galvanisation + floral decal',
      bottles: 320,
      price: '8 750 €',
      statusLabel: 'Pending...',
      delivery: '15/10/2026',
      order: 'CMD_2024_05_19_0187',
    },
  ];
}
