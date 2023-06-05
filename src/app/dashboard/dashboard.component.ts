import { Component, OnInit } from '@angular/core';
import {MenuService} from '../shared/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashboard = [];
  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.getDashboard();
  }
  getDashboard() {
    this._menuService.getDashboard().subscribe(dash => {
        //this.clydeNews = images['value'];
        this.dashboard = dash;
      },
      error => {
        console.error('We got an error: ', error);
      });
  }
  goToLink(url: string){
    window.open(url, "_blank"); 
  }
}
