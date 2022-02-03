import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
import { UserModel } from '../user/user.interface';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit{
  user: UserModel = new UserModel()
  users: Array<any> = new Array();

  constructor(
    //public userForm: FormGroup,
    //private fb: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<UserModalComponent>
  ) { }

  ngOnInit(): void {
    //this.userForm = this.fb.group({
    //  name: ['', [Validators.required]],
    //  email: ['', [Validators.required]],
    //  age: ['', [Validators.required]],
    //  weight: ['', [Validators.required]],
    //  height: ['', [Validators.required]],
    //})
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

  onClose(): void{
    this.dialogRef.close();
  }
}
