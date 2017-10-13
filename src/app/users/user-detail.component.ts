/**
 * Created by italo on 10/12/17.
 */

/**
 * Created by italo on 10/11/17.
 */

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { HttpUserService as UserService } from './http-user.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userService.getUser(+params['id'])
        .then(user => this.user = user);
    });
  }

  goBack(): void {
    this.location.back();
  }

}

