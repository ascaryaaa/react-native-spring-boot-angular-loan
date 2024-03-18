import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, LoginComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'web-side';
  
  ngOnInit(): void {
    initFlowbite();
  }

  isLogin: boolean = false;
  constructor(private service: AuthService) {
    this.isLogin = !!this.service.getAuth();
  }
}
