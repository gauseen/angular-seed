import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'page',
    loadChildren: './pages/pages.module#PagesModule',
  },
  { path: '', redirectTo: '/page/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

// route，是否用 hash 模式，默认为 false
const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, config),
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
