class Laptop {
    // Unlike Java, skip the attributes up here, head directly to constructor

    constructor(ram, memory, storage) {
        this.ram = ram;
        this.memory = memory;
        this.storage = storage;
        this.launchDate = new Date(); // Added a date object
    }

    // Just like Java, now we move to the methods
    getRam() {
        return this.ram;
    }

    getLaunchDate() {
        return this.launchDate.toDateString(); // Return the full Date object, in a human-readable format
    }
}

// Now to create an object of that class, you don't use the constructor, you use the class
const laptop1 = new Laptop('8GB', 'Intel i5', '256GB SSD');
const laptop2 = new Laptop('16GB', 'Intel i7', '512GB SSD');

// Adding the dates to the laptop objects
laptop1.launchDate = new Date('2023-01-01');
laptop2.launchDate = new Date('2023-06-01');

console.log('Laptop 1:', laptop1);
console.log('Laptop 2:', laptop2);
console.log('Laptop 1 Launch Date:', laptop1.getLaunchDate());
console.log('Laptop 2 Launch Date:', laptop2.getLaunchDate());



//TestClass.prototype.ram = '4GB'; 