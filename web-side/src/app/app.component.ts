import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar/sidebar.service';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, LoginComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'web-side';
  sidebarVisible$!: Observable<boolean>;
  
  ngOnInit(): void {
    initFlowbite();
    this.sidebarVisible$ = this.sidebarService.showSidebar$;
  }

  isLogin: boolean = false;

  constructor(private service: AuthService, private router: Router, private sidebarService: SidebarService) {
    this.isLogin = !!this.service.getAuth();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      // The event is now filtered but still needs a type guard
      if (event instanceof NavigationEnd) {
        // Now TypeScript knows `event` is definitely a NavigationEnd event
        if (event.urlAfterRedirects === '/login') {
          this.sidebarService.toggleSidebar(false);
        } else {
          this.sidebarService.toggleSidebar(true);
        }
      }
    });
  }
}
