import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { UserInterface, UserModel } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: UserModel = new UserModel()
  users: Array<any> = new Array();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers(){
    this.userService.allUsers().subscribe(users =>{
      this.users = users
    }, err => {
      console.log('Error listing users!')
    })
  }

  saveUser(){
    this.userService.saveUser(this.user).subscribe(user => {
      this.user = new UserModel();
      this.getListUsers();
    },
      err =>{
        console.log('Unable to save user', err);
      });
  }

  deleteUser(id: string){
    this.userService.removeUser(id).subscribe(user => {
      this.getListUsers();
    }, err => {
      console.log('Error removing user!', err)
    });
  }

}
