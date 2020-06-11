const queue = {
    functions: [],
    add(func, priority) {
        this.functions.push(func)
    },
    process() {
        this.functions.forEach(func => func())
    }
}

const user1 = {
    name: 'User 1',
    logName() { console.log(this.name) }
};
const user2 = {
    name: 'User 2'
};
const user3 = {
    name: 'User 3'
};

user1.logName();                        // User 1
queue.add(user1.logName);               // undefined
queue.add(user1.logName.bind(user2));   // User 2
queue.add(user1.logName.bind(user3));   // User 3

queue.process();
