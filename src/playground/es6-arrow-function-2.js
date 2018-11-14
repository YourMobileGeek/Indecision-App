//arguments object - no longer bound with arrow fuctions
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}; 
console.log(add(55, 1));

//this.keyword - no longer bound
const user = {
    name: 'Ariana', 
    cities: ['Philadelphia', 'New York', 'Dublin'], 
    printPlacesLived: function () {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge area
const multiplier  = {
    numbers: [10, 20, 20], 
    multiplyBy: 3, 
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy ); 
    }
};

console.log(multiplier.multiply());