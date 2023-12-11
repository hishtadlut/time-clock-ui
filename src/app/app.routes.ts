import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ReportingComponent } from './components/reporting/reporting.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'user-management', component: UserManagementComponent },
    { path: 'reporting', component: ReportingComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // Add other routes as needed                                                                            
];          