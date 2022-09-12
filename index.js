const fname = document.getElementById("name");
const email = document.getElementById("email");
const pnumber = document.getElementById("pnumber");
const message = document.getElementById("message");
const submitBtn = document.getElementById("s-button");
let fNameValue, emailAdd, phoneNumber, messageValue;

document.getElementById("downloadbtn").addEventListener('mouseenter', function(){
    document.getElementById("download").style.color = "black";
})
document.getElementById("downloadbtn").addEventListener('mouseleave', function(){
    document.getElementById("download").style.color = "white";
})

fname.addEventListener('input', function(event){
    fNameValue = event.target.value
})

email.addEventListener('input', function(event){
    emailAdd = event.target.value
})

pnumber.addEventListener('input', function(event){
    phoneNumber = event.target.value
})

message.addEventListener('input', function(event){
    messageValue = event.target.value
})

submitBtn.addEventListener('click', function(){
    verification(fNameValue, phoneNumber, phoneNumber, messageValue)
})

function verification(fn, pn, ea, msg){
    function pnVerf(pn){
        if(pn.substring(0,4) != "+961"){ console.log("what") }
    }
    console.log(pn.substring(0,4))
}