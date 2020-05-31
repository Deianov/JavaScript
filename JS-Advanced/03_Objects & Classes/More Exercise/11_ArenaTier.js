function arenaTier(args) {
    const gladiators = new Map();
    const attacks = [];

    const splitter1 = ' -> ';
    const splitter2 = ' vs ';
    const exitString = 'Ave Cesar';

    function Gladiator (name, skill, skillPoints) {
        this.name = name;
        this.skills = {[skill]: Number(skillPoints)};
        this.totalSkill = () => {
            return Object.values(this.skills).reduce((a, b) => a + b) || 0;
        };
        this.getSkills = () => {
            return Object.keys(this.skills).sort((a, b) => {
                return this.skills[b] - this.skills[a] || a.localeCompare(b)
            })
        };
        this.hasSkill = (skill) => !!this.skills[skill];
        this.getSkill = (skill) => this.skills[skill]
    }

    // read data
    for (let i = 0; i < args.length; i++) {
        const dataString = args[i];

        if (dataString.includes(splitter1)) {
            const [name, skill, points] = dataString.split(splitter1);
            const skillPoints = Number(points);

            if (gladiators.has(name)) {
                const gladiator = gladiators.get(name);

                if (!gladiator.hasSkill(skill) || (gladiator.getSkill(skill) < skillPoints)) {
                    gladiator.skills[skill] = Number(skillPoints);
                }
            } else {
                gladiators.set(name, new Gladiator(name, skill, skillPoints))
            }
        } else if (dataString.includes(splitter2)) {
            attacks.push(dataString)
        } else if (dataString === exitString) {
            break;
        }
    }

    // arena
    for (let i = 0; i < attacks.length; i++) {
        const [name1, name2] = attacks[i].split(splitter2);
        const gladiator1 = gladiators.get(name1);
        const gladiator2 = gladiators.get(name2);

        if (!gladiator1 || !gladiator2) {
            continue;
        }

        let attack = false;
        for (const skill of gladiator1.getSkills()) {

            if (gladiator2.hasSkill(skill)) {
                attack = gladiator1.getSkill(skill) - gladiator2.getSkill(skill);
                break;
            }
        }
        if (attack > 0){
            gladiators.delete(name2)
        }
        if (attack < 0){
            gladiators.delete(name1)
        }
    }

    // print result
    [...gladiators.values()].sort((a, b) => b.totalSkill() - a.totalSkill()).forEach(gladiator => {
        console.log(`${gladiator.name}: ${gladiator.totalSkill()} skill`);

        for (const skill of gladiator.getSkills()) {
            console.log(`- ${skill} <!> ${gladiator.getSkill(skill)}`)
        }
    });
}


arenaTier([
'Pesho -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Pesho vs Gladius',
'Gladius vs Julius',
'Gladius vs Gosho',
'Ave Cesar']);