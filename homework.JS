class Hamster{
    //field declarations
        owner = '';
        name;
        price = 15;
    
    //constructor
    constructor(name){
        this.name = name;
    }

    //methods
    //wheelRun() - log "squeak squeak"
    //eatFood() - log "nibble nibble"
    //getPrice() - return the price

    wheelRun(){
        console.log('squeak squeak');
    }

    eatFood(){
        console.log('nible nible');
    }

    getPrice(){
        return price;
    }
}
