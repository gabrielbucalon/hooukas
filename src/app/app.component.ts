import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './pages/auth/model/User';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { AuthService } from './pages/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'hooukas';

  currentUser: User;
  private _subscription: Subscription

  constructor(private _router: Router,
    private _authenticationService: AuthService,) { }


  ngOnInit() {

  }

  ngOnDestroy(): void {

  }

  logout() {

  }
}
