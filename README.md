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

### 1. Login

a. Installing Required Packages

Ensure you have Axios and AsyncStorage installed in your project. If not, you can install them by running:
```
npm install axios @react-native-async-storage/async-storage
```

b. Updating ModalAwal.jsx for Login Implementation

First, import Axios and AsyncStorage at the top of your ModalAwal.jsx file:

```
import React, { useState } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
// Other imports remain the same

```

Next, add state hooks for the username and password, and implement the login function:

```
const ModalAwal = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  // Toggle checkbox remains the same

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.231.54:8083/rest/auth/login-account', {
        username,
        password,
      });
      const { token } = response.data;
      await AsyncStorage.setItem('token', token);
      navigation.navigate("YourNextScreenHere"); // Update "YourNextScreenHere" to your target screen after login
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };

  // JSX remains mostly the same, update TextInput components as follows:

  return (
    <View style={styles.container}>
      {/* All your JSX code remains the same until the TextInput for User ID */}
      <TextInput 
        style={styles.inputform} 
        onChangeText={setUsername} 
        value={username}
      />
      {/* MPIN/Password TextInput */}
      <TextInput 
        style={styles.inputform} 
        onChangeText={setPassword} 
        secureTextEntry={true} // This hides the password input
        value={password}
      />
      {/* Remaining JSX code stays the same until the Login button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin} // Updated to use handleLogin
      >
        <Text style={styles.teksLogin}>Login</Text>
      </TouchableOpacity>
      {/* Rest of the component */}
    </View>
  );
};

```

c. Handling Navigation Based on Token Presence

In your App.js or wherever you handle navigation, you should decide whether to show the login screen or navigate directly to the main content based on the presence of a token. This could look something like this:

```
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import other necessary components and screens

const Stack = createStackNavigator();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsSignedIn(true);
      }
    };

    checkToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          // Screens to show when signed in
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          // Login screen
          <Stack.Screen name="Login" component={Login} />
        )}
         //add other screens here
      </Stack.Navigator>
    </NavigationContainer>
  );
}

```

### 2. Soft Delete

a. Filter Deleted Items
To implement soft delete functionality, it's crucial to filter out deleted items from being displayed in the user interface. This ensures that any items marked as deleted are not visible to the user.

```jsx
formDetailsState.data
  ?.filter(form => !form.deleted)
```

b. Update Redux Actions
Updating Redux actions involves adding an asynchronous thunk function specifically for soft deleting a form by its ID. This action will be responsible for making the API call to mark the form as deleted on the server.

```jsx
// form.jsx

// Async thunk to soft delete a form by ID
export const softDeleteForm = createAsyncThunk(
  'forms/softDeleteForm',
  async (formId, thunkAPI) => {
    try {
      const token = await getToken(); // Retrieve the token
      const response = await axios.delete(`${urls.softDeleteForm}${formId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Use bearer token in request headers
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
```

c. Implement Soft Delete Functionality
Now, let's implement the soft delete functionality in the ListPengajuanPinjaman component.

c.1. Import Soft Delete Action
Import the softDeleteForm action from Redux into the ListPengajuanPinjaman component.

```jsx
import { useDispatch } from "react-redux";
import { softDeleteForm } from '../reducers/Form';
```

c.2. Dispatch Soft Delete Action
Dispatch the softDeleteForm action when the user initiates a soft delete operation.

```jsx
const dispatch = useDispatch();

const handleSoftDelete = async (formId) => {
  dispatch(softDeleteForm(formId));
};
```

c.3. Display Soft Delete Button
Display a button or icon next to each item in the list to allow users to initiate the soft delete operation.

```jsx
{form.statusPengajuan === "Ditolak" && (
  <TouchableOpacity onPress={() => handleSoftDelete(form.idFormPengajuanPinjaman)}>
    {/* Soft delete button/icon */}
  </TouchableOpacity>
)}
```

c.4. Confirm Soft Delete
Optionally, prompt the user to confirm the soft delete operation using a modal or confirmation dialog.

```jsx
// Render a modal for confirming soft delete
<Modal
  animationType="slide"
  transparent={true}
  visible={showModal}
  onRequestClose={closeModal}
>
  {/* Modal content for confirming soft delete */}
</Modal>
```
With these implementation steps, the soft delete functionality is now fully integrated into the ListPengajuanPinjaman component, providing users with the ability to soft delete forms as needed.


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

### 4. Refactoring Structure

```
-pengajuan-pinjaman
   --detail-pengajuan-pinjaman
   --list-pengajuan-pinjaman
   pengajuan-pinjaman.module
   routing.mdule.ts
```

```
ng generate module pengajuan-pinjaman/routing --flat --module=pengajuan-pinjaman
```
```
ng generate service pengajuan-pinjaman/pengajuan-pinjaman 
```

pengajuan-pinjaman/routing.module.ts
```
const routes: Routes = [
  {path:'', redirectTo:'list', pathMatch: 'full'},
  {
    path: 'list',
    component: ListPengajuanPinjamanComponent
  },
  { path: ':id', component: DetailPengajuanPinjamanComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RoutingModule { }
```
app.routes.ts
```
  {
    path: 'pengajuan-pinjaman',
    loadChildren: ()=> 
    import('./pengajuan-pinjaman/pengajuan-pinjaman.module').then(m => m.PengajuanPinjamanModule),    
  },
```

### 5. Get the token from local storage and insert it to api-endpoint Authorization token bearer

insert token to local storage
```
        localStorage.setItem('token', response.data.token); // Assuming the token is directly under response.data
```
get token from local storage
```
  getToken(): string | null {
    return localStorage.getItem('token');
  }
```

insert the token to the Authorization token bearer
```
constructor(private httpClient: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
    return new HttpHeaders();
  }
```
pass it along-side with the service funstion of the api-endpint.
for example:
before:
```
  getListPengajuanPinjaman(): Observable<FormResponse> {
    return this.httpClient.get<FormResponse>(listPengajuanPinjaman);
  }
```
after
```
  getListPengajuanPinjaman(): Observable<FormResponse> {
    const headers = this.getHeaders();
    return this.httpClient.get<FormResponse>(listPengajuanPinjaman, { headers });
  }
```
by doing this, when the api-endpoint is being used it automatically get the token from local storage and insrted it to the api-endpoint Authorization token bearer.

### 6. Implement Chart

```
   npm install chart.js
```
if get error, you can using:
```
   npm install chart.js --force
```

### 7. Implement Modal

Generate Component: Begin by generating a new component specifically for the confirmation modal using Angular CLI's ng generate component command. This command creates all the necessary files and boilerplate code for your component.

```
ng generate component confirmation-modal
```

Confirmation Modal Component (HTML): Within the confirmation-modal.component.html file, define the structure of your modal. This includes the message asking for confirmation and buttons for user interaction.

`confirmation-modal.component.html`
```ruby
<div class="modal">
  <div class="modal-content">
    <p>Are you sure you want to proceed?</p>
    <div class="modal-actions">
      <button (click)="confirm()">Yes</button>
      <button (click)="cancel()">No</button>
    </div>
  </div>
</div>
```

Confirmation Modal Component (TypeScript): In the confirmation-modal.component.ts file, handle user actions and emit events accordingly using Angular's EventEmitter.

`confirmation-modal.component.ts`
```ruby
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  @Output() confirmed = new EventEmitter<boolean>();

  confirm() {
    this.confirmed.emit(true);
  }

  cancel() {
    this.confirmed.emit(false);
  }
this.showConfirmationModal = false;
}
```

Usage in Parent Component: Incorporate the confirmation modal into your parent component's logic. For instance, within DetailPengajuanPinjamanComponent.ts, manage the modal's visibility and handle confirmation/cancellation actions.

service of your parent component
for example inside `DetailPengajuanPinjamanComponent.ts`
```ruby
showConfirmationModal = false;

confirm() {
  // Implement the logic when the user confirms the action
  console.log('Action confirmed');
  this.showConfirmationModal = false; // Hide the modal
}

cancel() {
  // Implement the logic when the user cancels the action
  console.log('Action cancelled');
  this.showConfirmationModal = false; // Hide the modal
}
```
HTML of Parent Component: Within the parent component's HTML (DetailPengajuanPinjamanComponent.html), trigger the confirmation modal based on user actions, and handle the confirmed event.

html of your parent component
example `DetailPengajuanPinjamanComponent.html`
```ruby
<div class="modal-container" *ngIf="showConfirmationModal">
  <app-confirmation-modal 
    (confirmed)="onConfirmed($event)"
  ></app-confirmation-modal>
</div>

//
<button (click)="confirmAction('Diterima')">Diterima</button>
<button (click)="confirmAction('Ditolak')">Ditolak</button>
```

CSS of Parent Component: Style the modal container and adjust the z-index to ensure it appears above other content.

css of your parent component
```ruby
/* Modal container */
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    z-index: 9999; /* Ensure it's above other content */
  }
  
  /* Modal */
  app-confirmation-modal {
    z-index: 10000; /* Ensure it's above the overlay */
  }
```

### 8. Admin ID Parshing

Parshing the Admin Id that loged in to be able to be used in fetching admin detail api-endpoint

from the backend, we need to respon the id
```ruby
    public LoginResponse(Long id, String username, String token) {
        this.id = id;
        this.username = username;
        this.token = token;
    }
```

the login respon json example

```ruby
{
    "id": 1,
    "username": "Admin",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsInJvbGUiOiJST0xFX0FETUlOIiwidXNlcm5hbWUiOiJBZG1pbiIsImlhdCI6MTcxMTAyNjk2NCwiZXhwIjoxNzExMDMwNTY0fQ.oP3ANxsV5iArNQ64MAcKvLSotLBBBsoHXEl7ZUc76nY"
}
```

as you can see, the respon if we lgged in include the id of the user.

then, in the web-side, we need to add the id to local storage:

`auth.seervice.ts`
```ruby
  async login(form: UserForm): Promise<void> {
    console.log('Form username:', form.username);
    console.log('Form password:', form.password);

    try {
      const response = await axios.post('http://localhost:8083/rest/auth/login-admin', {
        username: form.username,
        password: form.password,
      });

      console.log('Response:', response);

      if (response) {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.id); //inser id to local storage
        this.router.navigate(['pengajuan-pinjaman']);
      }
    } catch (error) {
      console.error('Login failed!', error);
      alert('User is not found!');
    }
  }
```

after we input it to the loocal storage we can use it by createing a functuin in service, then use `localStorage.getItem('id')` in component 
for example:

pengajuan-pinjaman.service.ts
```
  @Injectable({
    providedIn: 'root'
  })
  export class PengajuanPinjamanService {

    constructor(private httpClient: HttpClient) { }
//for authentication
    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('token'); // Ideally, use an AuthService to get the token
      if (token) {
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
      }
      return new HttpHeaders();
    }

//this it the function to get admin detail
    getDetailAdmin(id: number): Observable<AdminDetailResponse> {
      const headers = this.getHeaders(); //for authentication
      return this.httpClient.get<AdminDetailResponse>(`${detailAdmin}${id}`, { headers })
    }
  }
```
then use the function in component like this:

sidebar.component.ts
```ruby
  admin?: AdminDetailResponse;

  constructor(
    private pengajuanPinjamanService: PengajuanPinjamanService
  ) {} 

  refreshAdminDetail() {
    const idString: string | null = localStorage.getItem('id');
    if (idString === null) {
      // Handle the case where 'id' is not found in localStorage
      console.error('ID not found in localStorage');
    } else {
      const id: number = +idString;
      this.pengajuanPinjamanService.getDetailAdmin(id).subscribe({
        next: (dataAdmin) => {
          this.admin = dataAdmin;
          console.log(this.admin);
        },
        error: (error) => console.error('Error fetching data:', error)
      });
    }
  }
```

then you can use it in html like this

```
{{ admin?.nameAdmin }}
```

### 9. Redux Fetching for Account Detail

Understanding the API Endpoint.
lets implement this api-endpoint:

```
http://localhost:8083/loan/v1/account/hid/{{hashedId}}
```

JSON Response:

```ruby
{
    "account_Id": 3,
    "hashedIdAccount": "f02afd85",
    "passwordAccount": "123456",
    "usernameAccount": "SarahJ",
    "accountToUser": {
        "idUser": 1,
        "nameUser": "Sarah Johnson",
        "nikUser": "4829610329478516"
    }
}
```

To do that:

a. Setup in Component

In your component file (e.g., SANDBOX.jsx), you'll:

Import the getAccountByHashedId action from the Account reducer.
Use useState to manage the hashed ID state.
Utilize useEffect to fetch the hashed ID from AsyncStorage and dispatch the getAccountByHashedId action.

```ruby
import { getAccountByHashedId } from '../reducers/Account';
import AsyncStorage from "@react-native-async-storage/async-storage";

  const [hashedId, setHashedId] = useState(null);

  const jenisPinjamanState = useSelector((state) => state.jenisPinjaman)
  const dispatch = useDispatch()

  const accountState = useSelector((state) => state.account);
  const dispatchAccount = useDispatch();

useEffect(() => {
    // Fetch hashed ID from AsyncStorage and fetch account data
    const fetchHashedId = async () => {
      try {
        const storedHashedId = await AsyncStorage.getItem("hashedId");
        if (storedHashedId) {
          setHashedId(storedHashedId);
          dispatchAccount(getAccountByHashedId(storedHashedId));
        }
      } catch (error) {
        console.error('Error fetching hashed ID from AsyncStorage:', error);
      }
    };

    fetchHashedId();

  }, [dispatchAccount]);

return (
         <View style={styles.accountContainer}>
            <Text>ID account: {accountState.data?.account_Id}</Text>
            <Text>Username account: {accountState.data?.usernameAccount}</Text>
            <Text>ID user: {accountState.data?.accountToUser.idUser}</Text>
            <Text>Name User: {accountState.data?.accountToUser.nameUser}</Text>
            <Text>NIK User: {accountState.data?.accountToUser.nikUser}</Text>
          </View>
)
```

b. Reducer Configuration

In the reducers/Account.jsx file:

Define an async thunk getAccountByHashedId to handle fetching account data by hashed ID.
Create a slice for the account state using createSlice.
Set up reducers for pending, fulfilled, and rejected states of the async thunk.

```ruby
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAccountData } from "../utils/apiUtils";

// Async thunk to fetch account data by hashed ID
export const getAccountByHashedId = createAsyncThunk(
  'account/getByHashedId',
  async (hashedId, { rejectWithValue }) => {
    try {
      const response = await fetchAccountData(hashedId); // Assuming fetchAccountData takes hashedId as an argument
      console.log(response)
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Slice for account state
const accountSlice = createSlice({
  name: 'account',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccountByHashedId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAccountByHashedId.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAccountByHashedId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

// Export actions and reducer
export const accountActions = accountSlice.actions;
export default accountSlice.reducer;
```

c. Store Configuration

In the Store.jsx file:

Configure the Redux store using configureStore.
Combine reducers from different slices, including accountReducer and others.

```ruby
import { configureStore } from "@reduxjs/toolkit";
import jenisPinjamanReducer from './JenisPinjaman';
import accountReducer from "./Account";

export default configureStore({
    reducer: {
        account: accountReducer,
        jenisPinjaman: jenisPinjamanReducer
    }
})
```

d. API Utility Functions

In the utils/apiUtils.jsx file:

Implement functions like getToken to retrieve the token from AsyncStorage and fetchAccountData to fetch account data using Axios.

```ruby
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    return token;
  } catch (error) {
    console.error("Error retrieving token from AsyncStorage:", error);
    return null;
  }
};

export const fetchAccountData = async (hashedId) => {
    try {
      const token = await getToken();
      if (token) {
        const response = await axios.get(`${Constant.getUserDetailByHashedId}${hashedId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data)
        return response.data;
      } else {
        console.error("Token not found in AsyncStorage");
        return null;
      }
    } catch (error) {
      console.error("Error fetching account data:", error);
      return null;
    }
};
  
export default { fetchAccountData };
```

e. Constants Setup

In the constants/Constant.jsx file:

Define constants like CONNECTION, PORT, and MAIN_URL to construct the API endpoint URL.

```ruby
const CONNECTION = "192.168.193.54";

const PORT = "8083";
const MAIN_URL = `http://${CONNECTION}:${PORT}/loan/v1/`;

const urls = {
  getUserDetailByHashedId: `${MAIN_URL}account/hid/`,
};

export default urls;

```
