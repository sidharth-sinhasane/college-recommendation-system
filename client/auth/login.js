import {email,password,issignup}  from "./signup.js"

function login(){
    const useremail=document.getElementById("email")
    const userpassword=document.getElementById("password")

    if(useremail==email && userpassword == password && issignup){
        location.replace("https://google.com")
    }
    else{
        alert("incorrect credentials")
    }
}