import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, title: 'Dahsboard | Money Mate - Finance Tracking Application'},
  {path: 'reports', component: ReportComponent, title: 'Report | Money Mate - Finance Tracking Application'},
];
