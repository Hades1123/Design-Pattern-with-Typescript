interface PaymentProcess {
    pay(amount: number): void;
}

class VisaPayment implements PaymentProcess {
    constructor(
        public cardNumber: string,
        public expireDate: string,
        public cvv: string,
    ) { }

    pay(amount: number): void {
        console.log(`Paying ${amount} USD with visa card ${this.cardNumber}`);
    }
}

class MoMoPayment implements PaymentProcess {
    constructor(
        public phone: string,
    ) { }

    pay(amount: number): void {
        console.log(`Paying ${amount} USD with momo card ${this.phone}`);
    }
}

class MemberRegistration {
    constructor(
        private paymentMethod: PaymentProcess
    ) { }
    register() {
        const amount = 100;
        this.paymentMethod.pay(100);
        console.log(`Subscribe successfully`);
    }
}

const newMember = new MemberRegistration(new MoMoPayment('0987249005'));
newMember.register();

const member = new MemberRegistration(new VisaPayment('123XXX', '2028', '123'));
member.register();