const fname = document.getElementById("name");
const email = document.getElementById("email");
const pnumber = document.getElementById("pnumber");
const message = document.getElementById("message");
const submitBtn = document.getElementById("s-button");
const contactLine = document.getElementById("contact-line");
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
    verification(fNameValue, phoneNumber, emailAdd, messageValue)
})

function verification(fn, pn, ea, msg){
    let eaVerf = ea.split("@")
    //Check Phone Number
    if(pn.substring(0,4) != "+961"){ 
        contactLine.innerHTML = "Phone Number should start with +961";
    }

    else if(pn.substring(4,5) == "3"){
        if(pn.length != 11){
            contactLine.innerHTML = "Phone Number should be 7 Numbers";
        }
    }
    else if(pn.length != 12){
        contactLine.innerHTML = "Phone Number should be 8 Numbers";
    }
    //Check Name
    else if(fn.length < 5){
        contactLine.innerHTML = "First Name should have at least 5 Chars";
    }
    //Check Email
    else if(msg.length < 100){
        contactLine.innerHTML = "Message should be at least 100 Chars";
    }
    //Check Email
    else if(eaVerf[0].length < 3 || eaVerf[1].length < 5){
        contactLine.innerHTML = "Your Email Address has an incorrect format";
    }
    else{
        switchToTable(fn, pn, ea, msg)
    }
}
//Change style and inert the table
async function calling(){
    document.getElementById("table").innerHTML = "<h1>Contact List</h1><table id='tableC'><tr><th>Name</th><th>Email</th><th>Phone Number</th><th>Message</th></tr></table>";
    document.getElementById("table").classList.add("contact")
    try {
        const response = await fetch('http://localhost/fsw/listmessages.php');
        const data = await response.json()
        data.forEach((item) => {
            document.querySelector("tbody").insertAdjacentHTML('beforeend', '<tr><td>'+item.full_name+'</td><td>'+item.email+'</td><td>'+item.phone_number+'</td><td>'+item.message+'</td></tr>')
        })
    }catch (error){
        console.log(error)
    }

}
//Calling APIs
async function switchToTable(fn, pn, ea, msg) {
    try {
        //Creating the FormData to Post
        const body = new FormData()
        body.set('name', fn)
        body.set('email', pn)
        body.set('pnumber', ea)
        body.set('message', msg)
        
        //Posting
        await fetch('http://localhost/fsw/contact.php', {
            method: 'POST',
            body: body
        });
    } catch (error) {
        console.log(error)
    }
    calling()
}