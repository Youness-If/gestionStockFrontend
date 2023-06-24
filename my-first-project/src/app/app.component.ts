import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  idleTimeout = 600000; // 10 minutes (600000 milliseconds)
  timeoutId: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startInactivityTimer();
      localStorage.clear();
  }

  @HostListener('window:mousemove')
  @HostListener('window:keydown')
  onUserActivity(): void {
    this.restartInactivityTimer();
  }

  startInactivityTimer(): void {
    this.timeoutId = setTimeout(() => {
      this.logoutUser();
    }, this.idleTimeout);
  }

  restartInactivityTimer(): void {
    clearTimeout(this.timeoutId);
    this.startInactivityTimer();
  }

  logoutUser(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
