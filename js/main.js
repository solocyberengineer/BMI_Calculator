// BMI = (mass /(height/100)^2)

function calculateBMI(mass, height){
    return ( mass / ((height/100) ** 2) )
}

function bmiStats(bmi){
    switch(true){
        case (bmi >= 40):
            return 'Servere obesity'
            break;
        case (bmi >= 30):
            return 'Obese'
            break;
        case (bmi >= 25):
            return 'Over weight'
            break;
        case (bmi >= 18.5):
            return 'Healthy range'
            break;
        default:
            return 'Under Weight';
            break;
    }
}

let output = document.querySelector('[display="output"]');
let mass = document.querySelector('#mass');
let height = document.querySelector('#height')
let cal = document.querySelector('[type="button"]');
let des = document.querySelector("[display='des']");


function displayOutput(){
    output.textContent = calculateBMI(parseInt(mass.value), parseInt(height.value)).toFixed(2)
    des.textContent = bmiStats(calculateBMI(parseInt(mass.value), parseInt(height.value)))
}


