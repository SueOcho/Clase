import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'colaboradores',component:ColaboradoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
