import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule), // lazy
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
