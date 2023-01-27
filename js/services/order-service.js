import Order from '../models/order.js';
import * as shippingService from './shipping-service.js';

export function total(order) {

    const d = (order.basic * order.discount) / 100;

    const sh = shippingService.shipment(order);

    const result = order.basic - d + sh;

    return result;
}