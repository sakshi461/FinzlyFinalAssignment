import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import{PaymentfailureComponent} from './paymentfailure/paymentfailure.component'
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { WalletComponent } from './wallet/wallet.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
//import { AuthGaurdService } from './auth-gaurd.service';

const routes: Routes = [
 
  {path:'login',component:LoginComponent},
  {path:'payment-success',component:PaymentOptionsComponent},
  { path: 'payment-options', component: PaymentOptionsComponent },
  { path: 'payment-failure', component: PaymentfailureComponent },
  {path:'wallet',component:WalletComponent},
  {path:'debit-card',component:DebitcardComponent},
  {path:'creditcard',component:CreditcardComponent},
  {path:'view-details', component:ViewDetailsComponent},
  {path:'previous-bills',component:ViewDetailsComponent},
 {path:'dash-board',component:DashBoardComponent},
 {path:'confirmation',component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
