import { Component, OnInit } from '@angular/core';
import { AuthService } from '@/pages/auth/services/auth.service';
import { User } from '@/pages/auth/model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  showFiller = false;

  user: User;

  constructor(private authService: AuthService,
    private _router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  logoutUser() {
    this.authService.logout();
    this._router.navigate(['register']);
   }
}
