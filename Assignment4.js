//first link
function Cat(name) {
    this.name = name; 
  };
  
  Cat.prototype = {
    constructor: Cat
  };
  
  function Bear(name) {
    this.name = name; 
  };
  
  Bear.prototype = {
    constructor: Bear
  };
  
  function Animal() { };
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  console.log(Cat.prototype);
  console.log(Bear.prototype);
  console.log(Animal.prototype.eat());

  //Second link
  function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  console.log(Dog.prototype.isPrototypeOf(beagle));  
  console.log(Object.prototype.isPrototypeOf(Dog.prototype));

  //third link
  function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype); 
 beagle = Object.create(Animal.prototype);

console.log(duck.eat()); // Should print "nom nom nom"
console.log(beagle.eat()); // Should print "nom nom nom" 
  
