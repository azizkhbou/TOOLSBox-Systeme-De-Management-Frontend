import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { UserStorageService } from 'src/app/core/services/authentication/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-systeme-management-qualite',
  templateUrl: './systeme-management-qualite.component.html',
  styleUrls: ['./systeme-management-qualite.component.css']
})
export class SystemeManagementQualiteComponent implements OnInit {
  nom: string;
  prenom: string;
  constructor(private apiService: ApiService, private userStorage: UserStorageService, private route: Router) { }

  ngOnInit() {
    this.getUser();

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
