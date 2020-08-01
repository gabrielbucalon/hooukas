import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './pages/auth/services/auth.service';
import { Router } from '@angular/router';
import { User } from './pages/auth/model/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'hooukas';

  currentUser: User;
  private _subscription: Subscription

  constructor(
    private _router: Router,
    private _authenticationService: AuthService,
  ) { }


  ngOnInit(){
    this._authenticationService.currentUser.subscribe(currentUser => this.currentUser = currentUser);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  logout() {
    this._authenticationService.logout();
    this._router.navigate(['/register']);
  }
}
