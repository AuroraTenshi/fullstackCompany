import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';
import { MaterialsComponent } from './materials/materials.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { SiteComponent } from './site/site.component';
import { SitesComponent } from './sites/sites.component';

const routes: Routes = [

  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/:id',
    component: ProjectComponent
  },
  {
    path: 'sites',
    component: SitesComponent
  },
  {
    path: 'sites/:id',
    component: SiteComponent
  },
  {
    path: 'materials',
    component: MaterialsComponent
  },
  {
    path: 'materials/:id',
    component: MaterialComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'projects'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
