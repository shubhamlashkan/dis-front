import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { NotificationsService } from 'src/app/API_Service/notifications.service';
import { TokenStorageService } from 'src/app/authentication';
import { SidenavService } from 'src/app/API_Service/sidenav.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
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
    this.subscription = timer(0, 10000*3).pipe(
      switchMap(() => this.notificationsService.getMyNotifications(this.auth.getUsername()))
    ).subscribe(notifi => {
      this.unreadNotifications=notifi.filter(e => !e.read).length;
    })
  }
  
  logout():void{
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
