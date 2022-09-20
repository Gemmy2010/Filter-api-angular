import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ApisComponent } from './component/apis/apis.component';
import { HeaderComponent } from './component/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiItemComponent } from './component/api-item/api-item.component';
import { DetailsFooterComponent } from './component/details-footer/details-footer.component';
import { UpdateApiComponent } from './pages/update-api/update-api.component';
import { CreateApiComponent } from './pages/create-api/create-api.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterComponent } from './component/search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ApisComponent,
    HeaderComponent,
    ApiItemComponent,
    DetailsFooterComponent,
    UpdateApiComponent,
    CreateApiComponent,
    SearchFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
