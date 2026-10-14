import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-details-orders',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './details-orders.component.html',
  styleUrl: './details-orders.component.scss'
})
export class DetailsOrdersComponent {
 constructor(public ref: MatDialogRef<DetailsOrdersComponent>) {}
}
