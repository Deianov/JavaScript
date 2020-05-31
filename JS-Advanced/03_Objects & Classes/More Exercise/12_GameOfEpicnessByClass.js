/**
 * 
 * @param {Array} inputKingdoms 
 * @param {Array} inputBattles 
 * 
 */

function gameOfEpicness(inputKingdoms, inputBattles) {

    const kingdoms = new Map();
    let nextId = 1;

    // Kingdom
    class Kingdom {
        #id;
        #generals;
        constructor(name) {
            this.#id = nextId++;
            this.name = name;
            this.#generals = {}
        }
        get id() {
            return this.#id
        }
        get generals() {
            return this.#generals
        }
        wins() {
            return Object.values(this.generals).reduce((a, v) => {return a + v.wins}, 0) || 0
        }
        losses() {
            return Object.values(this.generals).reduce((a, v) => {return a + v.losses}, 0) || 0;
        }
        toString() {
            let result = this.name + '\n';
            result += Object.values(this.#generals).sort((a, b) => b.army - a.army).map(general => general.toString()).join('\n');
            return result
        }
    }

    // General
    class General {
        constructor(name, army) {
            this.name = name;
            this.army = Number(army);
            this.wins = 0;
            this.losses = 0;
            this.battle = 0;
        }
        attack(general) {
            if (general === this) { return };
            this.battle = this.army - general.army;
        }
        update() {
            const isWin = this.battle > 0;
            const isDraw = this.battle === 0;
            this.army = Math.floor(this.army * (isDraw ? 1 : isWin ? 1.1 : 0.9));
            this.battle = 0;
            if (isWin) this.wins++;
            if (!isWin && !isDraw) this.losses++;
        }
        toString() {
            return `/\\general: ${this.name}\n---army: ${this.army}\n---wins: ${this.wins}\n---losses: ${this.losses}`
        }
    }

    // add kingdoms and generals
    for (let i = 0; i < inputKingdoms.length; i++) {
        const [kingdomName, generalName, generalArmy] = Object.values(inputKingdoms[i]);

        if (!kingdoms.has(kingdomName)) {
            kingdoms.set(kingdomName, new Kingdom(kingdomName))
        }

        const kingdom = kingdoms.get(kingdomName);
        const general = kingdom.generals[generalName];

        if (general) {
            general.army += generalArmy
        } else {
            kingdom.generals[generalName] = new General(generalName, generalArmy)
        }
    }

    // battles
    for (const battle of inputBattles) {
        const [kingdomName1, generalName1, kingdomName2, generalName2] = battle;

        if (kingdomName1 === kingdomName2) {
            continue;
        }

        const kingdom1 = kingdoms.get(kingdomName1);
        const kingdom2 = kingdoms.get(kingdomName2);

        if (kingdom1 && kingdom2) {
            const general1 = kingdom1.generals[generalName1];
            const general2 = kingdom2.generals[generalName2];

            if (general1 && general2) {
                general1.attack(general2);
                general2.attack(general1);
                general1.update();
                general2.update();
            }
        }
    }

    // print result
    const winnerKingdom = [...kingdoms.values()].sort((a, b) => {
        return b.wins() - a.wins() || a.losses() - b.losses() || a.name.localeCompare(b.name);
    })[0];
    if (winnerKingdom) {
        console.log(`Winner: ${winnerKingdom.toString()}`);
    }
}

gameOfEpicness([
    { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]);