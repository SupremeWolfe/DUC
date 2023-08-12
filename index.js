/*
1 meter = 3.281 feet
1 feet = 0.3048 meter
1 liter = 0.264 gallon
1 gallon = 3.78541 liter
1 kilogram = 2.204 pound
1 pound = 0.453592 kilogram
*/

let inputCount = document.getElementById("input-count")
const convertBtn = document.getElementById("convert-btn")


const meterFeetMult = 3.280839895
const feetMeterMult = 0.3048

const literGallonMult = 0.2641720524
const gallonLiterMult = 3.785411784

const kiloPoundMult = 2.20462262185
const poundKiloMult = 0.45359237

function length(){
    let feet = inputCount.value * meterFeetMult
     feet = feet.toFixed(3)
    let meter = inputCount.value * feetMeterMult
     meter = meter.toFixed(3)

    document.getElementById("output-length").textContent = `
    ${inputCount.value} meters = ${feet} feet | ${inputCount.value} feet = ${meter} meters
    `
}

function volume(){
    let gallon = inputCount.value * literGallonMult
     gallon = gallon.toFixed(3)
    let liter = inputCount * gallonLiterMult
     liter = liter.toFixed(3)

     document.getElementById("output-volume").textContent = `
     ${inputCount.value} liters = ${gallon} gallons | ${inputCount.value} gallons = ${liter} liters
     `
}

function weight(){
    let pound = inputCount.value * kiloPoundMult
     pound = pound.toFixed(3)
    let kilo = inputCount * poundKiloMult
     kilo = kilo.toFixed(3)

     document.getElementById("output-weight").textContent = `
     ${inputCount.value} kilos = ${pound} pounds | ${inputCount.value} pounds = ${kilo} kilos
     `
}

function renderStart(){
    inputCount.value = 20
    length()
    volume()
    weight()
}

convertBtn.addEventListener("click", function(){
    length()
    volume()
    weight()
})

renderStart()


