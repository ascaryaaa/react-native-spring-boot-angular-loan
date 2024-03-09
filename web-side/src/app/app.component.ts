import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-side';
  constructor(private router: Router) {}
  
  goHome() {
    this.router.navigate(['/home']);
  }
  goLogin() {
    this.router.navigate(['/login']);
  }
  goSandbox() {
    this.router.navigate(['/sandbox']);
  }
}
