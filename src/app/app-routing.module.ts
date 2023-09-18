import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardRoutesComponent } from './pages/portifolio/card-routes/card-routes.component';

const routes: Routes = [
  {path: '', component: TitleComponent, pathMatch: 'full'}, // normalmente principal fica com pathMatch full
  {path: 'portifolio', component: CardRoutesComponent, pathMatch: 'prefix', children: [ // portifolio
    {path: ':id', component: CardRoutesComponent}, // portifolio/id
    {path: ':id/:token', component: CardRoutesComponent}, // portifolio/id/token
  ]},
  {path: '**', redirectTo: ''} // rota coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
