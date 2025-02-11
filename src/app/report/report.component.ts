import { Component } from '@angular/core';
import {CardComponent} from '../ui/card/card.component';

@Component({
  selector: 'app-report',
  imports: [
    CardComponent
  ],
  standalone: true,
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {

}
