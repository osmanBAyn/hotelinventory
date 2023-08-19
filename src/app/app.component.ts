import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { AppConfig } from './AppConfig/appconfig.interface';
import { LOCAL_STORAGE_TOKEN } from './localstorage.token';
import { InitService } from './init.service';
import { filter, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { RouteConfigToken } from './services/routeConfig.service';
import { RouteConfig } from './services/routeConfig';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  config!:any;
  constructor( @Inject(LOCAL_STORAGE_TOKEN) private localStorage: Storage,private http:HttpClient,private initService: InitService,private configService: ConfigService,@Inject(RouteConfigToken)private routeConfig: RouteConfig,private routeC :Router){
    //console.log("Rooms Service Created");
    //console.log(config.roomsUrl);
    
    console.log(initService.config);
    console.log(routeConfig)
    //localStorage.setItem('roomsUrl', config.roomsUrl);
  }
  ngOnInit(): void {
    this.routeC.events.pipe(filter((e)=>e instanceof NavigationEnd)).subscribe(e=>console.log(e));
  }
}
