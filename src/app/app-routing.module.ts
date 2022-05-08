import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'main',
    redirectTo: ''
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  // {path: '**', loadChildren: () => import('./pages/page404/page404.component').then(m => m.Page404Component)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

