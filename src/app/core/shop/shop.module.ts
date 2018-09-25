import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';

@NgModule({
	imports: [CommonModule],
})
export class ShopModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: ShopModule,
			providers: [ProductService, OrderService]
		};
	}
}
