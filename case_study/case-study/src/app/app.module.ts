import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HearderComponent} from './component/hearder/hearder.component';
import {FooterComponent} from './component/footer/footer.component';
import {HomeComponent} from './component/home/home.component';
import {FacilityListComponent} from './component/facility/facility-list/facility-list.component';
import {FacilityEditComponent} from './component/facility/facility-edit/facility-edit.component';
import {FacilityCreateComponent} from './component/facility/facility-create/facility-create.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {CustomerEditComponent} from './component/customer/customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './component/customer/customer-create/customer-create.component';
import {ContractCreateComponent} from './component/contract/contract-create/contract-create.component';
import {ContractListComponent} from './component/contract/contract-list/contract-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    FooterComponent,
    HomeComponent,
    FacilityListComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    ContractCreateComponent,
    ContractListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
