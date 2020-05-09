class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(rat) {
        if (rat instanceof Rat) {
            this.unitedRats.push(rat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        return `${this.name}\n` + this.getRats().map(r => `##${r.name}`).join('\n');
    }
}

let rat = new Rat("Peter");
rat.unite(new Rat("George"));
rat.unite(new Rat("Alex"));
console.log(rat.toString());
// Peter
// ##George
// ##Alex
