interface PriceStrategy {
    getPrice(price: number): number;
}

class DefaultPrice implements PriceStrategy {
    getPrice(price: number): number {
        return price;
    }
}

class TeacherDayPrice implements PriceStrategy {
    getPrice(price: number): number {
        return price * 0.8;
    }
}

class PriceCalculator {
    constructor(private strategy: PriceStrategy) { }
    setStrategy(strategy: PriceStrategy) {
        this.strategy = strategy;
    }
    calculate(price: number): number {
        return this.strategy.getPrice(price);
    }
}

const calculator = new PriceCalculator(new DefaultPrice());
console.log('default price : ', calculator.calculate(1000));
calculator.setStrategy(new TeacherDayPrice());
console.log('teacher day price: ', calculator.calculate(1000));