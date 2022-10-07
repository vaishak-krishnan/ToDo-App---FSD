// Script for To-Do App

// Login verification 
function validateform(callback) {
    var uname = document.getElementById("username");
    var pswd = document.getElementById("password");
    var errorMessage = document.getElementById("errorMessage");

    if(uname.value.trim() === ""){
        errorMessage.innerHTML ="Please enter Username";
        uname.focus();
    }
    else if (pswd.value.trim() === ""){
        errorMessage.innerHTML = "Please enter Password";
        pswd.focus();
    }
    else if(uname.value != 'admin' || pswd.value != '12345'){
        errorMessage.innerHTML = "Username or password not matching.";
    }
    else {
        callback();
    }
}

// login success -- navigate to main.html
function loginsuccess(){
    window.location.replace("main.html");
    
}

// logout -- navigate to index.html
function logout(){
    window.location.replace("index.html");
}



function displaytodolist(){  
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);            
            var ulcontainer = document.getElementById('todolist');

            for (var i=0;i<data.length;i++){
                var list = document.createElement('li');
                list.setAttribute("class","list-group-item");

                var divlist = document.createElement('div');
                divlist.setAttribute("class","custom-control custom-checkbox");
                
                var checkbox = document.createElement('input');
                checkbox.setAttribute("class","custom-control-input");
                checkbox.type = 'checkbox';
                checkbox.id = 'check_box' + data[i].id;
                checkbox.name = 'check_box' + data[i].id;
                checkbox.value = data[i].title;

                if(data[i].completed === true){
                    checkbox.checked = true;
                    checkbox.disabled = true;
                } 
                else {
                    checkbox.addEventListener("click", checkNumbers, false);
                }               
            
                var label = document.createElement('label');
                label.setAttribute("class","d-block custom-control-label");
                label.htmlFor = 'check_box' + data[i].id;
                label.appendChild(document.createTextNode(data[i].title));                                
                
                divlist.appendChild(checkbox);
                divlist.appendChild(label);
                list.appendChild(divlist);
                ulcontainer.appendChild(list);
            }               
        }
    };
    xhttp.send();    
}


var count = 0;
function taskMessage(ticked){
    if(ticked == 5){
        alert("You Have completed 5 tasks succesfuly");
    }
}

function checkNumbers(){
    var status = this;
    
    let checkNumbersPromise = new Promise(function(resolve,reject){
        if(status.checked == true) {
            resolve(++count);
        }
        else {
            reject(--count);                     
        }    
    });

    checkNumbersPromise.then(
        function(value) { taskMessage(value);}
    )  
    .catch(
        function(error) { 
            alert("1 task deselected");
        }
    )
          
}