import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

const ALL_PRODUCTS: Product[] = [
	{ id: 1, title: 'Test1' },
	{ id: 2, title: 'Test2' },
	{ id: 3, title: 'Test3' },
	{ id: 4, title: 'Test4' },
	{ id: 5, title: 'Test5' },
	{ id: 6, title: 'Test6' }
];

@Injectable()
export class ProductService {
	getProducts(data: { [index: string]: any } = {}): Observable<Product[]> {
		return of((data && data.term) ? ALL_PRODUCTS.filter(x => x.title.toLocaleLowerCase().includes(data.term)) : ALL_PRODUCTS);
	}
}
