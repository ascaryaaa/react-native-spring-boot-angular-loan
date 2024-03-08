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

### 4. Before working again!/Sebelum ngerjain lagi

navigate again to your branch

```
git checkout <your branch name>
```

git pull!, make sure your branch is up to date to the main!

```
git pull origin main
```


#  Server-Side
## Implementing User API / Penggunaan User API

### Make sure you have created a database in your preferred database program i.e. PhpMyAdmin, SSMS, DBeaver called "pengajuan"
### Pastikan Anda telah membuat database di program database pilihan Anda yaitu PhpMyAdmin, SSMS, DBeaver yang disebut "pengajuan"

#### In this case, we are using PhpMyAdmin
#### Di kasus ini, kita menggunakan PhpMyAdmin
The main pathing of the API edpoint is http://localhost:8081/loan/v1/user

#### Read All Users / Membaca semua User
```
http://localhost:8081/loan/v1/user/getUsers
```

#### Post User to database / Posting User ke databse
```
http://localhost:8081/loan/v1/user/postUser
```

#### Read user by Id / Membaca user dari Id
```
http://localhost:8081/loan/v1/user/{number of user id}

# Example
http://localhost:8081/loan/v1/user/2
```

#### Read user by name / Membaca user dari nama
coming soon

1. Initialize Spring-Boot
   
![image](https://github.com/ascaryaaa/react-native-spring-boot-angular-loan/assets/73589875/1e349373-a22f-4a07-9dba-05e246724ed8)

2. Define Model
   Define the model of the REST API, here we use lombok to make things cleaner

```ruby
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // Define database class
@Table(name = "user") // Define the name of the table in the database
@Data // Initialize getter, setter, hashCode, equals, and toString
@NoArgsConstructor // Generate empty constructor
@AllArgsConstructor // Generate constructors with all elements
public class User {
    // Initialize the id and attributes of table

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user", updatable = false, nullable = false) // Can't be updated or null
    private Long idUser;

    // User's full name
    @Column(name = "name_user")
    private String namaUser;

    // User's nik number
    @Column(name = "nik_user")
    private String nikUser;
}
```

3. Define the repository
   This is used to store and make functions of the databse


```ruby
import com.cuan.serverside.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// Initialize repository by extending functions to CrudRepository
@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}
```

4. Define the interface of service and implementations

   Interface of service, this is esnure Service Layer Patter and promotes modularity and testability
```ruby
import com.cuan.serverside.model.User;

public interface UserService {
    // Define GET users function in service
    public Iterable<User> getAllUser();

    // Define GET users by id in service
    public User getUserId(Long id);

    // Define POST user in service
    public User saveUser(User user);

}
```

   This is the implementations of interface, we override the fucntions here 
```ruby
import com.cuan.serverside.model.User;
import com.cuan.serverside.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // Define Service Implementation
public class UserServiceImpl implements UserService {

    // Dependency Injection to prevent coupling
    @Autowired
    private UserRepository userRepository;
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Function overriding from interface
    @Override
    public Iterable<User> getAllUser(){
        return userRepository.findAll();
    }

    @Override
    public User getUserId(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
```

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

```ruby
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
imports: [RouterOutlet, RouterModule, CommonModule],

export class AppComponent {

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

```ruby
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
```

- Implement Navigation in Component Template

In your app.component.html, implement navigation using router links:

```ruby
<nav>
  <button (click)="goHome()">Go to Home</button>
  <button (click)="goLogin()">Go to Login</button>
</nav>
<router-outlet></router-outlet>
```



