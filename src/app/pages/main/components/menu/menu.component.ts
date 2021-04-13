import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../../../shared/models/user";
import {MainService} from "../../services/main.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  public player: User;
  public sub: Subscription = new Subscription();

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void{
  this.sub.add(this.mainService.getCurrentUser().subscribe((res) => {
      this.player = res[0];
      this.mainService.currentUser$.next(res[0]);
      console.log(this.mainService.currentUser$);
    })
  );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.mainService.currentUser$.next(null);
  }
}
