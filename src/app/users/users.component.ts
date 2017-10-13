import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .then(users => this.users = users);
  }

  getDetails(userDetail) {
    this.router.navigate(['/users/detail', userDetail.id]);
  }

}
