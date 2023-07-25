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

class Person{
    //attributes/field declarations:
        name; //-set name from parameter in constructor method
        age = 0;
        height = 0;
        weight = 0;
        mood = 0;
        hamsters = [] //-empty array initially
        bankAccount = 0; //-initially set to 0
    
    constructor(name){
        this.name = name;
    }

    getName(){ 
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log('Hello '+ getName());
    }
    eat(){
        //increment weight, increment mood
        this.weight += 6;
        this.mood += 2; 
    }
    exercise(){
        this.weight -= 0.5}
    
    ageUp(){ 
        //increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
        this.age += 1;
        this.height += 2;
        this.weight += 2;
        this.mood += -2;
        this.bankAccount += 10;
    }
    buyHamster(hamster){
        //push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
        this.mood += 10; 
        this.bankAccount -= getPrice(); 
    }

    buyGas(gas){
        this.bankAccount -= 1;
    }
}


//output a hamster object to the console as a test
hamster = new Hamster('testHamster');
console.log(hamster);

//1.
person1 = new Person('Timmy');
//2.
person1.ageUp(5);
console.log(person1);

//3.
person1.eat();
person1.eat();
person1.eat();
person1.eat()
person1.eat();
console.log(`Timmy's weight: `+ person1.getWeight());

//4.
function TimmyExercisesNtimes(n){
    for(i=1; i<=n; i++){
        person1.exercise();
        console.log('Timmy exercises: ' + i + ' time(s)');
    }  
}
TimmyExercisesNtimes(5)
console.log(`Timmy's weight: ` + person1.getWeight());

//5.
person1.ageUp(9);

//6.
hamster2 = new Hamster('Gus');

//7.
hamster2.owner = 'Timmy';

//8.
person1.buyGas();

//9.
person1.ageUp(15);

//10.
person1.eat();
person1.eat();

//11.
TimmyExercisesNtimes(2)
console.log(`Timmy's weight: ` + person1.getWeight());

