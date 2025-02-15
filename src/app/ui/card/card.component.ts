import { Component } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
