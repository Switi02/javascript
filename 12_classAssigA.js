

class Vehicle{
    constructor(carName, enginePower, seatingCapacity, price, groundClearance){
        this.carName = carName;
        this.enginePower = enginePower;
        this.seatingCapacity = seatingCapacity;
        this.price = price;
        this.groundClearance = groundClearance
    }
}

const scorpio = new Vehicle("Scorpio N", "97 to 149 kW", "7 Seater", "Rs. 8.42 - 14.60 Lakh", "187mm");
const xuv700 = new Vehicle("XUV 700", "147 to 150 kW", "7 Seater", "Rs. 14.01 - 26.18 Lakh", "200mm");
const thar = new Vehicle("Thar", "87 to 112 kW", "4 Seater", "Rs. 10.55 - 16.78 Lakh", "226mm");
const xuv300 = new Vehicle("XUV 300", "81 to 96 kW", "5 Seater", "Rs. 8.42 - 13.5 Lakh", "180mm");
const bolero = new Vehicle("Bolero neo", "74 to 96 kW", "7 Seater", "Rs. 9.63 - 12.14 Lakh", "182mm");

const arrayOfVehicles = [scorpio, xuv700, thar, xuv300, bolero];

for (const vehicle of arrayOfVehicles) {
    console.log(`Car Name: ${vehicle.carName} || Engine Power(HP): ${vehicle.enginePower} || Seating Capacity: ${vehicle.seatingCapacity} || Price: ${vehicle.price} || Ground Clearance: ${vehicle.groundClearance}`);
}
console.log(``);

class College{
    constructor(collegeName, city, type, noOfDept){
        this.collegeName = collegeName;
        this.city = city;
        this.type = type;
        this.noOfDept = noOfDept
    }
}

const pratap = new College("Pratap College", "Amalner", "Autonomus", 14);
const mj = new College("MJ College", "Jalgaon", "Private", 28);
const imr = new College("IMR College", "Jalgaon", "Private", 24);
const dy = new College("DY Patil College", "Pune", "Private", 30);
const mit = new College("MIT", "Pune", "Autonomus", 32);


function traverseObject(object){
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(`${key} : ${element}`);
        }
    }
    console.log(``);
}

traverseObject(pratap);
traverseObject(mj);
traverseObject(imr);
traverseObject(dy);
traverseObject(mit);