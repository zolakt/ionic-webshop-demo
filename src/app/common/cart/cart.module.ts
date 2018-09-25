import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CartComponent } from './components/cart.component';

@NgModule({
	imports: [
		CommonModule,
		IonicModule
	],
	declarations: [CartComponent],
	exports: [CartComponent]
})
export class CartModule {
}
