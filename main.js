/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}

/*****  Your code goes below  *****/

// Part 1

function to_fahrenheit() {

    let value = Number(prompt("How many degrees Celsius?"));

    console.log(`${value}° Celsius is equal to ${Math.round((value * 9/5) + 32)}° Fahrenheit`);

}

// Part 2

function to_celsius() {

    let value = Number(prompt("How many degrees Fahrenheit?"));

    console.log(`${value}° Fahrenheit is equal to ${Math.round((value - 32) * 5/9)}° Celsius`);

}

// Part 3

function roll_d10() {

    console.log(`You rolled the number ${Math.floor(Math.random() * 10) + 1}`);

}

// Part 4

function roll_d6() {

    console.log(`You rolled the number ${Math.floor(Math.random() * 6) + 1}`);

}

// Part 6

function top_value() {

    let maximum_value = Number(prompt("Maximum Value?"));

    console.log(Math.floor(Math.random() * maximum_value + 1));

}

// Part 7

let volume = 5

function show_volume() {

    console.log(volume);

}

function volume_up() {

    volume ++;

    show_volume();

}

function volume_down() {

    volume --;

    show_volume();

}

function random_volume() {

    let maximum_volume = Number(prompt("Maximum Volume?"));

    volume = Math.floor(Math.random() * maximum_volume + 1);

    show_volume();

}

// Part 8

function born_in() {

    let age = Number(prompt("Age?"));

    console.log(`${2024 - age}`);

}

// Part 9

function roll_dice() {

    let sides = Number(prompt("How many sides?"));

    console.log(`You rolled ${Math.floor(Math.random() * sides + 1)} on your ${sides} sided dice`);

}

// Part 10

function tic_tac_toe() {

    //TBD

}