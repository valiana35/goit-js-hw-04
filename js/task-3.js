'use strict';
const profile = {
    username: "Jacob",
    playTime: 300,
    amount: 300,
    changeUsername(newName) {
        this.username = newName;
    },
    updatePlayTime(hours) {
        this.amount = this.playTime + hours;
    },
    getInfo() {
       return `${this.username} has ${this.amount} active hours!`
    },
}

console.log(profile.getInfo()); 

profile.changeUsername("Marco");
console.log(profile.getInfo()); 

profile.updatePlayTime(20);
console.log(profile.getInfo());