import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserForm } from './auth';
import { Route, Router } from '@angular/router';

const users: Array<User> = [
  {email: 'Rifqiw', password: 'rifqi160', name: 'Rifqi Wiliatama'},
  {email: 'batman@gmail.com', password: 'batmobile', name: 'Bruce Wayne'},

];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:User | undefined;
  constructor(private router: Router) { }

  login(form: UserForm) {
    const response = users.find(user => this.matchUser(user, form));

    if (!response) {
      alert('user is not found !')
    } else {
      localStorage.setItem('user', JSON.stringify(response))
      this.router.navigate(['home']);
    }
  }
  getAuth(): User | undefined{
    const response = localStorage.getItem('user');
    if(!response) {
      return undefined
    } else {
      return JSON.parse(response);
    }
  }

  private matchUser(user: User, form:UserForm): boolean {
    return user.email === form.email && user.password === form.password;
  }
}
