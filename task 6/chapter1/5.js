users = [

    {"login":"ilyas", "password": "qwerty"},

    {"login":"eldar", "password": "qqqqq"},

    {"login":"assylkhan", "password": "qweqwe"},

    {"login":"anel", "password": "asdasd"},

    {"login":"alibek", "password": "aaaaaa"}

];
var login = prompt("login")
var password = prompt("password") 
var check = false
for (var i = 0; i < users.length; i++){
    if(login==users[i].login && password==users[i].password){
        check = true
    }
}
if(check){
    alert("Welcome, you are authenticated")
} else {
    alert("User not found")
}