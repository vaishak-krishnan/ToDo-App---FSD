let button = document.getElementById('button')
console.log(button);
let name,password,messge,form;
form = document.getElementById('login_form');

button.addEventListener('click', (e)=>{

    name = document.getElementById('name').value;
    password = document.getElementById('password').value;

    validateForm(name,password,(messge)=>{
        alert(messge);
    })
   

})


// let validateForm = (name,password,callback) => {
//     if(name == "" || password == ""){
//         callback("Please enter all the fields")
//     }else if(name.length < 4){
//         callback("name should be atleast 4 charecters")
//     }else if(password.length < 5){
//         callback("password should be atleast 5 charecters")
//     }else if(name == "admin" && password == "12345"){
//         callback("Login Succes")
//         window.location.href = form.getAttribute("action")
//         return false;
//     }
// }

let validateForm = (name,password,callback) => {
    if(name == "admin" && password == "12345"){
        callback("Login Succes")
        window.location.href = "main.html"

        }
        else{
        callback("invalid details")
    }
    
}