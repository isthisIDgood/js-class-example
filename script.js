class WoodWindQuintet {
    constructor() {
        this.performers = [];
        this.minMaxSize = 5;
    }
    displayPlayerInfo() {
        for (var i = 0; i < this.performers.length; i++){
            this.performers[i].displayInfo();
        }
    }
    addPlayer(newMember) {
        // if current size is equal to max size of a quintet, alert and do not add the performer
        if (this.performers.length == this.minMaxSize){
            alert("Max size of performers in quintet is met. Remove a performer" +
                " before continuing");
            return;
        }
        // insert performer into performers
        this.performers.push(newMember);
        // sort array by first name alphabetically
        this.performers = this.performers.sort((i1, i2) => {
            return i1.name - i2.name;
        });
    }
    perform() {
        if (this.performers.length < this.minMaxSize){
        alert("There are not enough players for quintet, we need " +
            (this.minMaxSize - this.performers.length) + " more player");
        }else {
            alert("Performance has started");
        }
    }
    removePlayer(name) {
        for (var i = 0; i < this.performers.length; i++){
            var performer = this.performers[i];
            if (performer.name == name){
            this.performers.splice(i, 1);
            }
        }
    }
}

class Performer {
    constructor(name, section, insturment) {
        this.name = name;
        this.section = section;
        this.insturment = insturment;
    }
    displayInfo() {
       alert(this.name + ' is a ' + this.insturment + ' in the ' + this.section + ' section');
    }
    displayThis() {
        console.log(this)
    }
}

var brent = new Performer('brent', 'woodwind', 'clarinet');
var max = new Performer('max', 'brass', 'french horn');
var adrian = new Performer('adrian', 'woodwind', 'oboe');
var rain = new Performer('rain', 'woodwind', 'bassoon');
var sarah = new Performer('sarah', 'woodwind', 'flute');
var hoffman = new Performer('hoffman', 'brass', 'french horn');
var shaun = new Performer('shaun', 'brass', 'french horn');

var quintet = new WoodWindQuintet();

quintet.addPlayer(brent);
quintet.addPlayer(max);
quintet.addPlayer(adrian);

quintet.displayPlayerInfo();
quintet.perform();

quintet.addPlayer(sarah);
quintet.addPlayer(rain);

quintet.addPlayer(hoffman);

quintet.removePlayer('max');

quintet.addPlayer(shaun);

quintet.displayPlayerInfo();
quintet.perform();

