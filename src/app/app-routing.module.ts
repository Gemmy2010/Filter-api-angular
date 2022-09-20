import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateApiComponent } from './pages/create-api/create-api.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdateApiComponent } from './pages/update-api/update-api.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'details/:name',
    component: DetailsComponent,
  },
  {
    path: 'create',
    component: CreateApiComponent,
  },
  {
    path: 'update/:name',
    component: UpdateApiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
