import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'contact-list', pathMatch: 'full' },
  {
    path: 'contact-list',
    loadChildren: () => import('./modules/contact-list/contact-list.module').then((m) => m.ContactListModule),
  },
  { path: '**', redirectTo: 'contact-list' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
