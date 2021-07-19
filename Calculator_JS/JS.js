const numbers = document.getElementsByClassName('btn');
const res_1 = document.getElementById("res_1");
const logHistory = document.getElementById("history");
const res_2 = document.getElementById("res_2");
const pows_num = document.getElementById("luythua");
let history = [];
let expressionData = "";
let res_2Data = "";
for (let number of numbers) {
    
    number.addEventListener('click', function () {
        res_1.innerHTML += this.value
    });
}
function equal() {
    let res = res_1.innerHTML
    
    let output = eval(res)
    
    expressionData = res
    res_2.Data = output
    //history.push({ expression: expressionData, res_1: res_1Data });
    //showHistory()
    res_2.innerHTML = output             
}
function pows() {        
    let res = res_1.innerHTML;  
    let output = eval(res**2)  ;
    res_2.Data = output;
    res_2.innerHTML=output;
}
function clean() {
    res_1.innerHTML = " "  
    res_2.innerHTML = " "      
}

function undo() {
    let res = res_1.innerHTML
    res_1.innerHTML = res.substring(0, res.length - 1);
}
function so_am() {
    let res = res_1.innerHTML;
    let output = eval(0-res);
    res_2.innerHTML = output;
}

/*function showHistory() {
    let log = ""
    for (let key in history) {
        log += history[key].expression + " = " + history[key].res_1 + "<br>" + "<br>"
    }
    logHistory.innerHTML = log
}*/

// Dark & Light Mode
/*let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

// Index History
let indexHistory = document.getElementsByClassName("fa-history")
indexHistory[0].addEventListener("click", function () {
    logHistory.classList.toggle("indexHistory")
})*/