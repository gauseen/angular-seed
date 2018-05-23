import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { NavComponent } from './nav/nav.component';
import { UiComponent } from './ui/ui.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'nav', component: NavComponent },
      { path: 'ui', component: UiComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})

export class PagesRoutingModule { }

export const routedComponents = [
  LayoutComponent,
  HomeComponent,
  NavComponent,
  UiComponent,
];
