class FifaOnlinePlayer {
    public name: string;
    public team: string;
    public score: number;
    constructor(name: string, team: string, score: number) {
        this.name = name;
        this.team = team;
        this.score = score;
    }

    goals() {
        this.score += 1;
    }

    clone() {
        return new FifaOnlinePlayer(this.name, this.team, this.score);
    }
}

const prototypePattern = new FifaOnlinePlayer('Cr7', 'Al', 0);

const Cr7 = prototypePattern.clone();

const M10 = prototypePattern.clone();
M10.name = 'M10';
M10.team = '?';

Cr7.goals();
Cr7.goals();
console.log(`${Cr7.name} has recorded ${Cr7.score}`);

M10.goals();
console.log(`${M10.name} has recorded ${M10.score}`);

console.log(Cr7)
console.log(M10)
