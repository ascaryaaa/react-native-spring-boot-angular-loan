import { Component, OnInit } from '@angular/core';
import { SandboxService } from './sandbox.service';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css'],
})
export class SandboxComponent implements OnInit {
  users: any[] = [];

  constructor(private sandboxService: SandboxService) {}

  ngOnInit(): void {
    this.sandboxService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => console.error('There was an error!', error),
    });
  }
}
