import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private dataService: UserService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });
    
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    })

  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   };
  // }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true; 

      this.dataService.addUser(value);

      this.form.reset();
    }
  }

}
