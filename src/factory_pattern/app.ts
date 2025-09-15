type CustomerInfo = { name: string; cargoVolume: string };

interface TransportOptions {
    name?: string;
    doors?: number;
    price?: string;
    customerInfo?: CustomerInfo;
}

type TransportCtor<T extends Transport = Transport> = new (opts?: TransportOptions) => T;

abstract class Transport {
    protected name: string;
    protected doors: number;
    protected price: string;
    protected customerInfo: CustomerInfo;

    constructor(opts: TransportOptions = {}) {
        const {
            name = 'No name',
            doors = 0,
            price = '0$',
            customerInfo = { name: 'default', cargoVolume: 'none' },
        } = opts;

        this.name = name;
        this.doors = doors;
        this.price = price;
        this.customerInfo = customerInfo;
    }
}

class Car extends Transport {
    constructor(opts: TransportOptions = {}) {
        super({ name: 'Ford 368', doors: 12, price: '100$', ...opts });
    }
}

class Truck extends Transport {
    constructor(opts: TransportOptions = {}) {
        super({ name: 'Super Truck', doors: 20, price: '1000$', ...opts })
    }
}

abstract class ServicesLogistic2<T extends Transport = Transport> {
    protected abstract service: TransportCtor<T>;

    getTransport(customer: CustomerInfo): T {
        return new this.service({ customerInfo: customer });
    }
}

class CarService extends ServicesLogistic2<Car> {
    protected override service: TransportCtor<Car> = Car;
}

class TruckService extends ServicesLogistic2<Truck> {
    protected override service: TransportCtor<Truck> = Truck;
}

const carService = new CarService();
console.log('New car service : ', carService.getTransport({ name: 'Nguyen', cargoVolume: '200kg' }));

const truckService = new TruckService();
console.log('New Truck service : ', truckService.getTransport({ name: 'Hades', cargoVolume: '1000kg' }));