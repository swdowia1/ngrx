import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
const routes: Routes = [
  {
    path: 'display',
    component: DisplayComponent
  },
  {
    path: 'block',
    component: BlockchainComponent
  },
  {
    path: '',
    redirectTo: '/display',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
