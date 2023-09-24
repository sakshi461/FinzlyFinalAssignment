import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { WalletComponent } from './wallet/wallet.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentfailureComponent } from './paymentfailure/paymentfailure.component';
import { PreviousBillsComponent } from './previous-bills/previous-bills.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


const routes:Routes=[
  {path:'', component:LoginComponent},
  {path:'dashboard',component:DashBoardComponent }

];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    PaymentOptionsComponent,
    CreditcardComponent,
    DebitcardComponent,
    WalletComponent,
    PaymentSuccessComponent,
    PaymentfailureComponent,
    PreviousBillsComponent,
    ViewDetailsComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, BrowserAnimationsModule,RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
