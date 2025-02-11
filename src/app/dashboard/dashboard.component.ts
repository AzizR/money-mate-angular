import {Component, computed, signal} from '@angular/core';
import { CardComponent } from "../ui/card/card.component";


@Component({
  selector: 'app-dashboard',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
