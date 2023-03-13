let mainpara = document.getElementById("firstPara")
let scndpara = document.getElementById("secondPara")
let theSign = document.getElementById("calcSign")

let ClearBtn = document.getElementById("clear")
ClearBtn.addEventListener("click", clearing)
function clearing(){
    mainpara.textContent = "";
    scndpara.textContent = "";
    theSign.textContent = "";
}


let calculator = document.getElementById("calculator")

let whatWeDo = "";/**/

calculator.addEventListener("click", (e)=>{
    const isThisButton = e.target.nodeName ==="BUTTON";
    if(isThisButton){
        if(e.target.classList.contains("theNumber")){
            scndpara.textContent += e.target.value;
        }
    }
})/*makes buttons work, as it should*/


let thePlusbtn = document.getElementById("plus")
thePlusbtn.addEventListener("click", theAddition)
function theAddition(){
    if(mainpara.textContent!="" && scndpara.textContent!=""){
        equalize();
        theSign.textContent = "+"
        whatWeDo = "adding";
    }else if(mainpara.textContent!="" && scndpara.textContent===""){
        theSign.textContent = "+"
        whatWeDo = "adding";
    }
    else{
        theSign.textContent = "+"
        mainpara.textContent = scndpara.textContent
        scndpara.textContent = "";
        whatWeDo = "adding";
    }
}
let theMinusbtn = document.getElementById("minus")
theMinusbtn.addEventListener("click", theSubtraction)
function theSubtraction(){
    if(mainpara.textContent!="" && scndpara.textContent!=""){
        equalize();
        theSign.textContent = "-"
        whatWeDo = "taking";
    }else if(mainpara.textContent!="" && scndpara.textContent===""){
        theSign.textContent = "-"
        whatWeDo = "taking";
    }
    else{
        theSign.textContent = "-"
        mainpara.textContent = scndpara.textContent
        scndpara.textContent = "";
        whatWeDo = "taking";
    }
}
let theMultiply = document.getElementById("times")
theMultiply.addEventListener("click", theMultiplication)
function theMultiplication(){
    if(mainpara.textContent!="" && scndpara.textContent!=""){
        equalize();
        theSign.textContent = "*"
        whatWeDo = "multiplying";
    }else if(mainpara.textContent!="" && scndpara.textContent===""){
        theSign.textContent = "*"
        whatWeDo = "multiplying";
    }
    else{
        theSign.textContent = "*"
        mainpara.textContent = scndpara.textContent
        scndpara.textContent = "";
        whatWeDo = "multiplying";
    }
}
let theDividing = document.getElementById("divide")
theDividing.addEventListener("click", theDivision)
function theDivision(){
    if(scndpara.textContent==="0"){
        scndpara.textContent = "";
        alert("you can NOT divide by 0, choose other number")
    }
    if(mainpara.textContent!="" && scndpara.textContent!=""){
        equalize();
        theSign.textContent = "/"
        whatWeDo = "dividing";
    }else if(mainpara.textContent!="" && scndpara.textContent===""){
        theSign.textContent = "/"
        whatWeDo = "dividing";
    }
    else{
        theSign.textContent = "/"
        mainpara.textContent = scndpara.textContent
        scndpara.textContent = "";
        whatWeDo = "dividing";
    }
}
let equalBtn = document.getElementById("equals")
equalBtn.addEventListener("click", equalize)


let num1;
let num2;
let theText;
function equalize(){
    if(mainpara.textContent!="" && scndpara.textContent!=""){
        if(scndpara.textContent==="0" && whatWeDo==="dividing"){
            scndpara.textContent = "";
            alert("you can NOT divide by 0, choose other number")
        }else{
            let firstDot = mainpara.textContent.split("")
            firstDot = firstDot.pop()
            let isItADot;
            let scndDot = scndpara.textContent.split("")
            scndDot = scndDot.pop()
            if (firstDot ==="."){
                isItADot = true;
            }else if(scndDot ==="."){
                isItADot = true;
            }else{
                isItADot = false;
            }
            if(isItADot){
                alert("Can not calculate this, you have dot at the end of one of you numbers")
                alert("fix to countinue")
            }else{
                num1 = parseFloat(mainpara.textContent);
                num2 = parseFloat(scndpara.textContent);
                switch(whatWeDo){
                    case "adding":
                        theText = num1 + num2;
                        theText = Math.round((theText + Number.EPSILON) * 100) / 100;
                        mainpara.textContent=theText.toString();
                        scndpara.textContent ="";
                        whatWeDo="";
                        theSign.textContent="";
                        break;
                    case "taking":
                        theText = num1 - num2;
                        theText = Math.round((theText + Number.EPSILON) * 100) / 100;
                        mainpara.textContent=theText.toString();
                        scndpara.textContent ="";
                        whatWeDo="";
                        theSign.textContent="";
                        break;
                    case "multiplying":
                        theText = num1 * num2;
                        theText = Math.round((theText + Number.EPSILON) * 100) / 100;
                        mainpara.textContent=theText.toString();
                        scndpara.textContent ="";
                        whatWeDo="";
                        theSign.textContent="";
                        break;
                    case "dividing":
                        theText = num1 / num2;
                        theText = Math.round((theText + Number.EPSILON) * 100) / 100;
                        mainpara.textContent=theText.toString();
                        scndpara.textContent ="";
                        whatWeDo="";
                        theSign.textContent="";
                        break;
                }
            }

        }
    }/*calculates the numbers and outputs stuff into main para*/
}

let DelBtn = document.getElementById("delete")

DelBtn.addEventListener("click", theDeleting)
function theDeleting(){
    if(scndpara.textContent ===""){
        whatWeDo = ""
        theSign.textContent = ""
        scndpara.textContent = mainpara.textContent
        mainpara.textContent = ""
    }else{
    let nums = scndpara.textContent.split("")
    nums.pop()
    nums = nums.join("")
    scndpara.textContent = nums;
    }
}

let dotBtn = document.getElementById("dot")

dotBtn.addEventListener("click", addingDot)
function addingDot(){
    if(scndpara.textContent===""){
        alert("You can not add just dot, you have to add a number!")
        alert("Try again!")
    }else{
    let theText = scndpara.textContent.split("")
    let hasTheDot = theText.includes(".")
        if(hasTheDot){
            alert("You can not add more than one dot in the value!")
        }else{
            scndpara.textContent += dotBtn.value
        }
    }
}

/*fully functional calculator*/
/*do not edit above this line*/

document.addEventListener("keydown", function(e){
    let pressedKey = e.key;
    let pressedNum = parseInt(e.key);
    if(Number.isInteger(pressedNum)){
        scndpara.textContent += pressedNum;
    }else{
        switch(pressedKey){
            case "+": theAddition()
            break;
            case "-": theSubtraction()
            break;
            case "*": theMultiplication()
            break;
            case "/": theDivision()
            break;
            case "Enter": equalize()
            break;
            case "Backspace": theDeleting()
            break;
            case ".": addingDot()
            break;
            case "Delete": clearing()
            break;
        }
    }
})

