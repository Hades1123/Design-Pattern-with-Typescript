class Leader {
    receiveRequest(offer: string) {
        console.log(`Boss said : ${offer} --> OK`);
    }
}

class Secretary {
    private leader: Leader;
    constructor() {
        this.leader = new Leader();
    }

    receiveRequest(offer: string) {
        this.leader.receiveRequest(offer);
    }
}

class Developer {
    private offer: string;
    constructor(offer: string) {
        this.offer = offer;
    }
    applyFor(target: Secretary) {
        target.receiveRequest(this.offer);
    }
}

const dev = new Developer('Apply for 5000$');
dev.applyFor(new Secretary());