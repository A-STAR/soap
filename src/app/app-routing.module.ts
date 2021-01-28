import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DATA } from './data.mock';

import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: DATA.navigation[0].name.toLocaleLowerCase(),
    pathMatch: 'full'
  }
];

DATA.navigation.forEach(({ name, image }) => {
  routes.push({
    path: name.toLocaleLowerCase(),
    component: PageComponent,
    data: { name, image }
  });
});

routes.push({
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
