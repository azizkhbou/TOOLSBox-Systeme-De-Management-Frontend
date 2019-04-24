import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/authentication/auth.service';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserStorageService} from '../../core/services/authentication/user-storage.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'
  ]
})
export class AuthenticationComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  invalidLogin: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private userStorage: UserStorageService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.attemptAuth(this.f.username.value, this.f.password.value).subscribe(
      data => {
        this.userStorage.saveToken(data);
        if (this.userStorage.getPrivilegesToken().includes('Gestion des utilisateurs')) {
        this.router.navigate(['admin']);
        } else {
          this.router.navigate(['SMQ']); }
      },
      error => {
        this.invalidLogin = true;
        this.loading = false;
      }
    );
  }
}
