import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { DetailComponent } from './detail/detail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';

import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'favorite', component:FavoriteComponent},
  {path:'detail/:id', component:DetailComponent},
  {path:'album/:id', component:AlbumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
