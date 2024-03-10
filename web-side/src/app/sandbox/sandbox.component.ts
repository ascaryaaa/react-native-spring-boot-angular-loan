import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export type UsersResponse = User[]

export interface User {
  id_user: number
  name_user: string
  nik_user: string
}

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css'],
})

export class SandboxComponent implements OnInit{
  users:UsersResponse = [] 
  async fetchUserDataAsync(url: string): Promise<UsersResponse> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: UsersResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Fetching error:', error);
      throw error;
    }
  }

  apiUrl = 'http://localhost:8081/loan/v1/user/getUsers';

  //ngOnInit -> kalau component nya first time dimount, function ngOnInit bakal dirun
  async ngOnInit(){
    try {
      this.users = await this.fetchUserDataAsync(this.apiUrl);
      console.log(this.users); // Process your users here
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
}