let display = document.querySelector("#display")
function cleardisplay(){
    display.innerText = ""
}
function deletechar(){
    display.innerText = display.innerText.substring(0,display.innerText.length-1)
}
function addchar(character) {
   if(display.innerText == null || display.innerText =="0" || display.innerText==="") {
    display.innerText = character
   }
   else {
    display.innerText = display.innerText + character
   }
}
function changesign() {
    if(display.innerText.substring(0,1) == "-") {
        display.innerText = display.innerText.substring(1,display.innerText.length)

    }else {
        display.innerText = "-"+display.innerText
    }
}
function compute() {
    if(display.innerText == "") {
        alert("Nothing to caluclate")
    }
    else {
        try {
            display.innerText = eval(display.innerText)// 7-2 = 5
        }
        catch{
            display.innerText = "Error"
        }
    }
}
function checkNum() {
    let input = display.innerText;
    for(let i =0; i < input.length;i++) {
        let ch = input.substring(i, i+1);
        if((ch < "0" || ch > "9") && ch != "+" && ch != "-" && ch != "*" && ch != "/" && ch != "." && ch != "(" && ch != ")" ) {
            alert("Invalid Entry");
            return false;
        }
     
    }
    return true;
}

function sqrt() {
    if(display.innerText == "") {
        alert("Nothing to caluclate")
    }else{
        display.innerText = Math.sqrt(display.innerText)
    }
}
function sin() {
    if(display.innerText == "") {
        alert("Nothing to caluclate")
    } else {
        display.innerText = Math.sin(display.innerText)
    }
}
function cos() {
    if(display.innerText == "") {
        alert("Nothing to be caluc;ate")
    }else {
        display.innerText = Math.cos(display.innerText)
    }
}
function tan() {
    if(display.innerText == "") {
        alert("Nothing to be caluclate")
    }else {
        display.innerText = Math
        .tan(display.innerText)
    }
}
function ln() {
    if(display.innerText == "") {
        alert("Nothing to be caluclate")
    }else {
        display.innerText = Math
        .log(display.innerText)
    }
}
function exp() {
    if(display.innerText == "") {
        alert("Nothing to be caluclate")
    }else {
        display.innerText = Math
        .exp(display.innerText)
    }
}
function sq() {
    if(display.innerText == "") {
        alert("Nothing to be caluclate")
    }
    else{
        display.innerText = eval(display.innerText) * eval(display.innerText)
    }
}