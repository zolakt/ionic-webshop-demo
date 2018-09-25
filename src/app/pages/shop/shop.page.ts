import { Component } from '@angular/core';
import { CartService, CartItem } from '@ngx-refactora/cart';
import { Product } from '../../core/shop/models/product';
import { ProductService } from '../../core/shop/services/product.service';

@Component({
	selector: 'app-shop',
	templateUrl: 'shop.page.html',
	styleUrls: ['shop.page.scss']
})
export class ShopPage {
	products: Product[];
	quantities: {};

	constructor(private cart: CartService, private productService: ProductService) {
		this.search();

		this.cart.items.subscribe(x => {
			this.quantities = x.reduce((map, obj) => {
				map[obj.id] = obj.quantity;
				return map;
			}, {});
		});
	}

	search(term: string = null) {
		this.productService.getProducts({ term: term }).subscribe(x => {
			this.products = x;
		});
	}

	addProduct(res: Product) {
		const item = new CartItem({
			id: res.id,
			title: res.title,
			imageUrl: '',
			description: '',
			quantity: 0
		});

		this.cart.addProduct(item, 1);
	}

	removeProduct(res: Product) {
		this.cart.removeProduct(res.id, 1);
	}

	checkQuantity(res: Product): number {
		return this.quantities && this.quantities[res.id] ? this.quantities[res.id] : 0;
	}
}
