import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {path: '', component: TitleComponent, pathMatch: 'full'}, // normalmente principal fica com pathMatch full
  {path: 'portifolio', component: CardComponent, pathMatch: 'prefix', children: [ // portifolio
    {path: ':id', component: CardComponent}, // portifolio/id
    {path: ':id/:token', component: CardComponent}, // portifolio/id/token
  ]},
  {path: '**', redirectTo: ''} // rota coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
