//plant requirements

const PI = 3.1415;
const radius = 5; 
const area = PI * radius * radius;  
const spacePerPlant = 0.8;
const weekOne = 20
const weekTwo = 40
const weekThree = 80


const apw1 = spacePerPlant * weekOne;
const apw2 = spacePerPlant * weekTwo;
const apw3 = spacePerPlant * weekThree; 

const w1_total_area = apw1 / area * 100;
console.log(w1_total_area)

const w2_total_area = apw2 / area * 100;
console.log(w2_total_area)

const w3_total_area = apw3 / area * 100;

function plantState(){
    if (w1_total_area>=80 || 0===3){
        console.log("pruned")
    }
} 

if (w2_total_area>=50 || w2_total_area <80);
{
    console.log("monitor");
}
if (w3_total_area<50 || 6===3)
{
console.log("planted")
} 

plantState(weekOne)
plantState(weekTwo)
plantState(weekThree)