# !COMMIT RULES/ATURAN COMMIT!

### 1. Create Individual Branches/Bikin branch masing masing

Before starting work on any task or feature, create a separate branch dedicated to that specific task:

```
git branch <your branch name>
```

Switch to the newly created branch to begin working on your task.

```
git checkout <your branch name>
```

Ensure your branch is up to date with the latest changes from the main branch.

```
git pull origin main
```


### 2. Push Changes to Respective Branches/Push dlu ke branch masing masing

Once you've completed your changes, it's time to commit and push them to your branch. 
Add all modified files to the staging area to be included in the commit.

```
git add .
```

Commit your changes with a descriptive message summarizing the modifications made.

```
git commit -m "<commit detail>"
```

Push your changes to your own branch.

```
git push -u origin <your branch name>
```

### 3. Merge Changes into Main/Merge perubahan ke main

Switch to the main branch to prepare for merging.

```
git checkout main
```

Fetch the latest changes from the main branch to ensure you're merging into an updated version.

```
git pull origin main
```

Merge your branch into the main branch to incorporate your changes.

```
git merge <your branch name>
```

Finally, push the merged changes to the remote main branch, completing the integration process.

```
git push -u origin main
```


#  Server-Side
1. Initialize Spring-Boot
   
![image](https://github.com/ascaryaaa/react-native-spring-boot-angular-loan/assets/73589875/1e349373-a22f-4a07-9dba-05e246724ed8)


# Mobile-Side

For use stack navigation, install

```
@react-navigation/native
```

and

```
@react-navigation/native-stack
```

i install this library because This library provides native components for gesture handling in React Native applications, improving the performance and responsiveness of touch interactions such as swiping, pinching, and rotating.

```
px expo install react-native-gesture-handler
```

# Website-Side

## Reminder

### Node Modules

Make sure to `npm install` to get the 'node_modules'

### ng

Make sure to setup the `ng` by:
- installing:

```
npm install -g @angular/cli
```

- then, setup the path to the Enviorment Variables.

References: https://stackoverflow.com/questions/37991556/ng-is-not-recognized-as-an-internal-or-external-command

## Step by step

### 1. Create Login and Dashboard Component

```
ng generate component login
ng generate component home
```
### 2. Routing Setup

To enable navigation between different components in your Angular application, you need to set up routing. Follow these steps:

- Import Required Modules

In your app.component.ts, ensure you import necessary modules:

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
//

imports: [RouterOutlet, RouterModule, CommonModule],
//
export class AppComponent {
//
  constructor(private router: Router) {}
  
  goHome() {
    this.router.navigate(['/home']);
  }
  goLogin() {
    this.router.navigate(['/login']);
  }
}
```

- Define Routes

In your app.routes.ts, define the routes for your application:

```
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
```

- Implement Navigation in Component Template

In your app.component.html, implement navigation using router links:

```
<nav>
  <button (click)="goHome()">Go to Home</button>
  <button (click)="goLogin()">Go to Login</button>
</nav>
<router-outlet></router-outlet>
```



