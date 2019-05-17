import {Component, OnInit} from '@angular/core';
import {UserStorageService} from '../../core/services/authentication/user-storage.service';
import {Router} from '@angular/router';
import {ApiService} from '../../core/services/api/api.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'
  ]
})
export class AdministrationComponent implements OnInit {

  nom: string;
  prenom: string;
  toggle: boolean;


  constructor(private apiService: ApiService, private userStorage: UserStorageService, private route: Router) {
  }

  ngOnInit() {
    this.toggle = true;
    this.getUser();
  }

  toggleMenu() {
    this.toggle = !this.toggle;
  }

  getUser(): void {
    this.apiService.getUserByUsername().subscribe(data => {
      this.prenom = data.firstName;
      this.nom = data.lastName;
    });
  }

  signOut(): void {
    this.userStorage.signOut();

  }

}
