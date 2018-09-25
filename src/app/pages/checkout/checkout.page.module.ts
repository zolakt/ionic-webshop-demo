import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckoutPage } from './checkout.page';
import { CartModule } from '../../common/cart/cart.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: CheckoutPage }]),
		CartModule
	],
	declarations: [CheckoutPage]
})
export class CheckoutPageModule {}
