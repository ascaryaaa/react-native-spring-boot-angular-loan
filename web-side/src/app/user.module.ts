import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { UserComponent } from './user.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { TambahUserComponent } from './tambah-user/tambah-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [UserComponent, TambahUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    SidebarComponent,
    NavbarComponent,
    RouterLink,
    FormsModule,
    DataTablesModule
  ]
})
export class UserModule { }
