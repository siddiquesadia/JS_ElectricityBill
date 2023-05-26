let light= prompt("Enter Total Number of Lights");
let lightHour= prompt("Enter how many hours the lights are used for a day");
let fan= prompt("Enter Total Number of fans");
let fanHour= prompt("Enter how many hours the fans are used for a day");
let ac= prompt("Enter Total Number of ACs");
let acHour= prompt("Enter how many hours the ACs are used for a day");
let fridge= prompt("Enter Total Number of Fridges");
let fridgeHour= prompt("Enter how many hours the fridges are used for a day")
let tv= prompt("Enter Total Number of TVs");
let tvHour= prompt("Enter how many hours the TVs are used for a day")

let total= ((light* lightHour* 40) + (fan* fanHour *75) + (ac * acHour * 3000) + (fridge * fridgeHour * 800) + (tv * tvHour * 150))/1000;

let unit = parseFloat(prompt("Enter per Unit amount in Tk"));
let bill = (total * unit);

document.write("Total Electricity Per Day " + total + " Unit <br>");

document.write(`Per Day Electricity Bill is ${bill} TK`);