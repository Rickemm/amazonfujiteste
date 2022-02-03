import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onCreate(){
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed');
    })
  }

}
