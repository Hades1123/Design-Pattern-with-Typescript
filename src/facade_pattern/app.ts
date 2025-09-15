class Fees {
    calc(value: number) {
        return value * 1.05;
    }
}

class Shipping {
    calc() {
        return 5;
    }
}

class Discount {
    calc(value: number) {
        return value * 0.9;
    }
}

class Shoppe {
    private fee: Fees;
    private shipping: Shipping;
    private discount: Discount;

    constructor() {
        this.fee = new Fees();
        this.shipping = new Shipping();
        this.discount = new Discount();
    }

    calc(value: number) {
        let price = this.discount.calc(value);
        price = this.fee.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

function buy(price: number) {
    const shoppe = new Shoppe();
    return shoppe.calc(price);
}

console.log('Price at shoppe for this item : ', buy(100));