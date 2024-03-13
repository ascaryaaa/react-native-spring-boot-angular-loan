import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'sandbox', component: SandboxComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
