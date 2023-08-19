import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { loginGuardCanActivate,loginGuardCanMatch } from './guards/login.guard';
import { bookingGuardGuard } from './booking/guards/booking-guard.guard';

const routes: Routes = [
  
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'employee',component:EmployeeComponent,canActivate:[loginGuardCanActivate]},
  
  {path:'rooms', loadChildren:()=>import('./rooms/rooms.module').then(m=>m.RoomsModule),canActivate:[loginGuardCanActivate],canMatch:[loginGuardCanMatch]},
  {path:'rooms', redirectTo:'/login'},
  {path: 'login',component:LoginComponent},
  { path: 'booking/:roomId', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  
  { path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
