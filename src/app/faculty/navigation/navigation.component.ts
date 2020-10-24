import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/API_Service/sidenav.service';
import { Subscription, timer } from 'rxjs';
import { NotificationsService } from 'src/app/API_Service/notifications.service';
import { TokenStorageService } from 'src/app/authentication';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers : [SidenavService]
})
export class NavigationComponent implements OnInit {
  subscription: Subscription;

  constructor(private notificationsService : NotificationsService,private auth: TokenStorageService,private router : Router,private sidenav : SidenavService) { }
  unreadNotifications : Number
 
  ngOnInit() {
    this.refresh()
    
  }

  refresh()
  {
    this.subscription = timer(0, 5000).pipe(
      switchMap(() => this.notificationsService.getMyNotifications())
    ).subscribe(notifi => {
      this.unreadNotifications=notifi.filter(e => !e.read).length;
    })
  }
  
  logout():void{
    localStorage.clear();
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
