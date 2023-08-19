import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  APP_SERVICE_CONFIG,
  APP_SERVICE_CONFIG_VALUE,
} from './AppConfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { APP_INITIALIZER } from '@angular/core';
import { InitService } from './init.service';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';
import { RouteConfigToken } from './services/routeConfig.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ErrorHandlerService } from './error-handler.service';
function initializeApp(InitService: InitService) {
  return () => InitService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective,
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: APP_SERVICE_CONFIG, useValue: APP_SERVICE_CONFIG_VALUE },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [InitService, HttpClient],
      multi: true,
    },
    { provide: RouteConfigToken, useValue: { title:'Home'}},
    {provide: ErrorHandler, useClass: ErrorHandlerService}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
