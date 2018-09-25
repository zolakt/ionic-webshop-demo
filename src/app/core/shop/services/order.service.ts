import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order';

@Injectable()
export class OrderService {
	generateOrder(data: Order): Observable<Order> {
		return of(data);
	}
}
