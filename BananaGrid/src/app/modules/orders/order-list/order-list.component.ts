import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less']
})
export class OrderListComponent implements OnInit {

  constructor(private _orderSrv: OrderService) { }

  orders: Order[] = [];

  ngOnInit(): void {
    this.orders = this._orderSrv.getOrdersFromApi();
  }

}
