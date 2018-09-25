import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem, CartService } from '@ngx-refactora/cart';

@Component({
	selector: 'shopping-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	items: CartItem[] = [];

	@Input()
	buttonStyle = 'btn btn-sm btn-light';

	@Output()
	cartUpdated: EventEmitter<any> = new EventEmitter<any>();

	constructor(private cartService: CartService) {}

	ngOnInit(): void {
		this.cartService.items.subscribe(x => {
			this.items = x;
		});
	}

	addItem(item: CartItem) {
		this.cartService.addProduct(item);
		this.cartUpdated.emit(this.items);
	}

	removeItem(item: CartItem, all: false) {
		this.cartService.removeProduct(item.id, all ? item.quantity : 1);
		this.cartUpdated.emit(this.items);
	}
}
