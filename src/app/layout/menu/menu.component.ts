import { Component, OnInit } from '@angular/core';
import { AuthService } from '@/pages/auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  showFiller = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void { }

  logoutUser() { this.authService.logout() }
}
