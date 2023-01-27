export function shipment(order) {

    let f = 0.0;

    if(order.basic < 100.0) {
        f = 20.0;
    }
    else if(order.basic >= 100.0 && order.basic < 200.0) {
        f = 12.0;
    }
    else {
        f = 0.0;
    }

    return f;
}

