import { Component, OnInit } from '@angular/core';
import {UserStorageService} from '../../../core/services/authentication/user-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userStorage: UserStorageService) { }

  ngOnInit() {
  }

  signOut(): void {
    this.userStorage.signOut();

  }
}
