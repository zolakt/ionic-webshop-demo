import { Component } from '@angular/core';
import { CartService, CartItem } from '@ngx-refactora/cart';
import { Order } from '../../core/shop/models/order';

@Component({
	selector: 'app-checkout',
	templateUrl: 'checkout.page.html',
	styleUrls: ['checkout.page.scss']
})
export class CheckoutPage {
	model: Order;
	success = false;
	hasItems = false;

	constructor(private cart: CartService) {
		this.model = new Order();

		this.cart.items.subscribe(x => {
			this.hasItems = !!x.length;
		});
	}

	addNote(res: any): void {
		const item = new CartItem({
			id: res.id,
			title: res.title,
			imageUrl: '',
			description: '',
			quantity: 0
		});

		this.cart.addProduct(item, 1);
	}

	generateOrder(): void {
		this.cart.clearItems();
		this.success = true;
	}
}
