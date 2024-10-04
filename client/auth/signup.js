let email=""
let password=""
let issignup=false

function signup(){
    email=document.getElementById("email")
    password=document.getElementById("password")
    issignup=true

    console.log(password,email)
}

export{email,password,issignup}