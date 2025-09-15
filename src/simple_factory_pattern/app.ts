type Tservice = 'sms' | 'email';

interface INotification {
    sendMessage(m: string): void;
}

class EmailNotification implements INotification {
    sendMessage(m: string): void {
        console.log(`Email send message : ${m}`);
    }
}

class SMSNotification implements INotification {
    sendMessage(m: string): void {
        console.log(`SMS send message: ${m}`)
    }
}

class NotificationFactory {
    static create(type: Tservice) {
        switch (type) {
            case 'sms':
                return new SMSNotification();
            case 'email':
                return new EmailNotification();
            default:
                throw new Error('Invalid type ');
        }
    }
}

const notifier = NotificationFactory.create('email');
notifier.sendMessage('hello world');
const notifier_2 = NotificationFactory.create('sms');
notifier.sendMessage('goodbye');