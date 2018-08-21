import { Routes, CanActivate } from '@angular/router';
import { LoginFormComponent } from  './src/app/components/login-form/login-form.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-gaurd.service';
import { 
    RoleGuardService as RoleGuard 
  } from './role-guard.service';
import { HomepageComponent } from 'src/app/components/homepage/homepage.component';
import { EmpDetailsComponent } from 'src/app/components/emp-details/emp-details.component';


export const ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { 
    path: 'profile',
    component: LoginFormComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'employee-details', 
    component: EmpDetailsComponent, 
    canActivate: [RoleGuard], 
    data: { 
      expectedRole: 'employee'
    },
},
  { path: '**', redirectTo: '' }
];