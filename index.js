const counterEl = document.getElementById("counter")
const incrementEl = document.getElementById("incrementBtn")
const saveEl = document.getElementById("saveBtn")
const entriesEl = document.getElementById("entries")


let count = 0;
let passengerArray = []

function incrementCount(){
    count++
    counterEl.textContent = count
}

function saveCount(){
    passengerArray.push(count)
    console.log(passengerArray)
    count = 0
    counterEl.textContent = 0
    render()
}

function render(){
    entriesEl.textContent = `Previous entries: ${passengerArray.join(' - ')}`
}

saveEl.addEventListener("click", saveCount)

incrementEl.addEventListener("click", incrementCount)