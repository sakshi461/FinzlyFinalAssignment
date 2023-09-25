import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { WalletComponent } from './wallet/wallet.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentfailureComponent } from './paymentfailure/paymentfailure.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HttpClientModule } from '@angular/common/http';
import { PreviousbillsComponent } from './previousbills/previousbills.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PaymentoptionsComponent } from './paymentoptions/paymentoptions.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login on root
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashBoardComponent },
  {path:'previousbills',component:PreviousbillsComponent}
  // Add more route definitions here as needed
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    CreditcardComponent,
    DebitcardComponent,
    WalletComponent,
    PaymentSuccessComponent,
    PaymentfailureComponent,
    ViewDetailsComponent,
    ConfirmationComponent,
    PreviousbillsComponent,
    TransactionComponent,
    PaymentoptionsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
