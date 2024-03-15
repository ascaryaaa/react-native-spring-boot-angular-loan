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
## How to use API-Endpoint / Cara Penggunaan API-Endpoint

### 1. Download open-source web server

You can download XAMPP from the following link:
https://www.apachefriends.org/download.html

### 2. Turn on the Apache and MySQL

After downloading XAMPP, start both Apache and MySQL services.

![image](https://github.com/ascaryaaa/react-native-spring-boot-angular-loan/assets/73589875/1ebfd479-da60-47cf-894a-c2a0199a867b)

Ensure MySQL Port Configuration: **Check the port number assigned to MySQL!** In this example, the MySQL port is `3306`. Take note of this port number as it will be **needed** for configuration.

### 3. Configure databasesource.url
Navigate to `src/main/resources/application.properties` and verify that the `spring.datasource.url` matches your **MySQL port**.

```
spring.datasource.url=jdbc:mysql://localhost:<your MySQL port>/pengajuan
```

Replace <your MySQL port> with the port number obtained earlier (usually 3306). For example:

```
spring.datasource.url=jdbc:mysql://localhost:3306/pengajuan
```

Ensure that the username and password match your MySQL credentials. If you're using XAMPP, the default username is root (`username:root`) and usually, there's no password set (`password: `).

### 4. Import Database

Access phpMyAdmin by visiting:

```
http://localhost/phpmyadmin/
```

Log in to phpMyAdmin using your credentials. If you're using XAMPP, the default username is root (`username:root`) and usually, there's no password set (`password: `).

Navigate to the "Import" section as shown in the image:

![image](https://github.com/ascaryaaa/react-native-spring-boot-angular-loan/assets/73589875/7ce0333f-8d6b-445a-9604-a2427408619e)

Choose the file to import, and select the `pengajuan.sql` database file located in the `database/pengajuan.sql` repository.

### 5. Run the Server-Side

Navigate to the server-side directory and execute the ServerSideApplication to start the server-side application.

### 6. Establishing Connection between Endpoint and External Devices (koneksi ke mobile-side)

When you're trying to link up the API endpoint from server-side with other devices such as mobile app, it's really important to make sure all the devices involved use the same connection. To do that, you just have to change the URL from `localhost` to the connection ip address `IP address` in the `mobile-side`.

For instance, if the initial URL is:
```
http://localhost:8081/loan/v1/user/post-user
```

You would modify it to your ip address connection:

```
http://192.168.234.54:8081/loan/v1/user/get-users
```

For easier changing the connection ip address in the url for the mobile-side, you can go to `utils/Constant.js` and change the `CONNECTION`, for example:

```
const CONNECTION = 'localhost';
```

You would modify it to your ip address connection:

```
const CONNECTION = '192.168.234.54';
``` 

If you want to check wether the API-Endpoint can be accessed in you device just go to your browser and type `http://<your ip connection>:8081/loan/v1/user/getUsers`

![apijson](https://github.com/ascaryaaa/react-native-spring-boot-angular-loan/assets/73589875/52eb6006-5e1f-42d8-8b26-0c26abb5e3fb)


If it working, the you are done!

## API Documentation

### The main pathing of the API edpoint is http://localhost:8083/loan/v1/user

#### Read All Users / Membaca semua User
```
http://localhost:8083/loan/v1/user/get-users
```

#### Post User to database / Posting User ke databse
```
http://localhost:8083/loan/v1/user/post-user
```

#### Read user by Id / Membaca user dari Id
```
http://localhost:8083/loan/v1/user/{number of user id}

# Example
http://localhost:8083/loan/v1/user/2
```


#### Read user by name / Membaca user dari nama
coming soon

### The main pathing of the API edpoint is http://localhost:8083/loan/v1/account


#### Read All Accounts / Membaca semua Account
```
http://localhost:8083/loan/v1/account/get-accounts
```

#### Post Account to database / Posting Account ke databse
```
http://localhost:8083/loan/v1/account/post-account
```

#### Read Account by Id / Membaca Account dari Id
```
http://localhost:8083/loan/v1/account/{number of user id}

# Example
http://localhost:8083/loan/v1/account/2
```


### The main pathing of the API edpoint is http://localhost:8083/loan/v1/admin


#### Read All Admins / Membaca semua Admin
```
http://localhost:8083/loan/v1/Admin/get-Admins
```

#### Post Admin to database / Posting Admin ke databse
```
http://localhost:8083/loan/v1/Admin/post-Admin
```

#### Read Admin by Id / Membaca Admin dari Id
```
http://localhost:8083/loan/v1/Admin/{number of user id}

# Example
http://localhost:8083/loan/v1/Admin/2
```

### The main pathing of the API edpoint is http://localhost:8083/rest/auth


#### Login for Admin / Login sebagai Admin
```
http://localhost:8083/rest/auth/login-admin
```

#### Login for User / Login sebagai User
```
http://localhost:8083/rest/auth/login-account
```



## Server-Side Documentation

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

5. Overcoming CORS Issues

CORS (Cross-Origin Resource Sharing) is a security measure implemented in web browsers to prevent requests to a server from scripts hosted on a different origin. This is relevant when you're developing applications locally, for example, where your frontend (running on localhost:4200) attempts to fetch data from your backend (running on localhost:8081). Without proper handling, CORS policies block such requests for security reasons, to prevent malicious scripts from accessing sensitive information on another domain.

To enable cross-origin requests in a Spring Boot application, you can use the `@CrossOrigin` annotation in your `controller`. This annotation allows you to specify which origins are permitted to access your backend. For development purposes, you might want to allow requests from your frontend development server.

Here's how you can apply it:

```
    @CrossOrigin(origins = "http://localhost:<port>")
```

Replace <port> with the port number your frontend is running on. For instance, if your frontend is on port 4200, the annotation should look like this:

```
    @CrossOrigin(origins = "http://localhost:4200")
```

This configuration explicitly allows cross-origin requests from localhost:4200, facilitating the communication between your frontend and backend during development.

6. APi endpoint for images

for images, we upload the image using Imagur, its the image hosting service. then we use the link to put it to the database.

![image](https://github.com/ascaryaaa/react-native-spring-boot-angular-loan/assets/73589875/8899263a-4dd8-4763-8cc0-0b4b1b8f6e1f)

This is the example of the Promo API-Endpoint

```ruby
[
    {
        "idPromo": 1,
        "namePromo": "Promo Fleksi 1",
        "gambarPromo": "blob:https://imgur.com/c70d655a-a7d9-47af-a1d0-a2d827d4e307"
    },
    {
        "idPromo": 2,
        "namePromo": "Promo Griya 1",
        "gambarPromo": "https://i.imgur.com/yjK6mpi.png"
    }
]
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

### 3. Implemented Authentication and Login

Install axios to fetch the data
```
npm i axios
```

To fetch the data from the API-Endpoint

```ruby
    const response = await axios.post("http://localhost:8081/rest/auth/login",{username: form.username, password: form.password});
```

Add CrossOrigin for the `AuthController`

```
@CrossOrigin(origins = "http://localhost:4200")
```

Because using `await`, then we need to add `async` to the `login` function

```ruby
 async login(form: UserForm) {
```
