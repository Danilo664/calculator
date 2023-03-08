let mainpara = document.getElementById("firstPara")
let scndpara = document.getElementById("secondPara")
let theSign = document.getElementById("calcSign")

let deleteBtn = document.getElementById("delete")
deleteBtn.addEventListener("click", deleteAll)


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
thePlusbtn.addEventListener("click", ()=>{
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
})
let theMinusbtn = document.getElementById("minus")
theMinusbtn.addEventListener("click", ()=>{
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
})
let theMultiply = document.getElementById("times")
theMultiply.addEventListener("click", ()=>{
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
})
let theDividing = document.getElementById("divide")
theDividing.addEventListener("click", ()=>{
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
})

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
            num1 = parseInt(mainpara.textContent);
            num2 = parseInt(scndpara.textContent);
            switch(whatWeDo){
                case "adding":
                    theText = num1 + num2;
                    mainpara.textContent=theText.toString();
                    scndpara.textContent ="";
                    whatWeDo="";
                    theSign.textContent="";
                    break;
                case "taking":
                    theText = num1 - num2;
                    mainpara.textContent=theText.toString();
                    scndpara.textContent ="";
                    whatWeDo="";
                    theSign.textContent="";
                    break;
                case "multiplying":
                    theText = num1 * num2;
                    mainpara.textContent=theText.toString();
                    scndpara.textContent ="";
                    whatWeDo="";
                    theSign.textContent="";
                    break;
                case "dividing":
                    theText = num1 / num2;
                    mainpara.textContent=theText.toString();
                    scndpara.textContent ="";
                    whatWeDo="";
                    theSign.textContent="";
                    break;
            }
        }
    }/*calculates the numbers and outputs stuff into main para*/
}
function deleteAll(){
    mainpara.textContent = "";
    scndpara.textContent = "";
    theSign.textContent = "";
}/*cleans up the whole thing*/