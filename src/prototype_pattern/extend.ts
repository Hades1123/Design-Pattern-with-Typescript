interface IPrototype {
    clone(): void;
}

class User implements IPrototype {
    constructor(
        public name: string,
        public role: string,
        public permissions: string[]
    ) { }

    //deep copy
    clone(): this {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this)),
            JSON.parse(JSON.stringify(this))
        )
    }
}

const user = new User('vansi', 'user', ['create', 'delete']);
const clone = user.clone();
user.permissions.push('greeting');

console.log(user === clone);
console.log(user)
console.log(clone)