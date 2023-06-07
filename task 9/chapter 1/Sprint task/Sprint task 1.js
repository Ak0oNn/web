function Register(){
    localStorage.setItem ('email', email.value)
    localStorage.setItem('password',password.value) 
    localStorage.setItem('fullName',fullName.value)
    localStorage.setItem('country',country.value)
    localStorage.setItem('date',date.value)
}

function sign(){
    let found=false;
    if(email.value==localStorage.getItem('email') && password.value==localStorage.getItem('password')){
        found=true;
        document.body.innerHTML = '<h1>You are authenticated</h1>';
    }
    if(!found){
        alert("not found")
        email.value = '';
        email.style.border = "1px solid red";
        password.value = '';
        password.style.border = "1px solid red";
    }
}