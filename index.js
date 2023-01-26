let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innertext = count
}

function save() {
    console.log(count)
}

let saveEl = document.getElementById("save-el")

function save(){
    let countStr = count + " - "
    
    saveEl.innerText += countStr
    console.log(count)
}