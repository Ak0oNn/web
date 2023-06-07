var n = parseInt(prompt())
var array = []
for (var i = 0;i<n;i++){
    array.push(parseInt(prompt()))
}
var m = parseInt(prompt())
var x = new Boolean(true);
for(var i = 0; i<n; i++){
    if(array[i]==m){
        alert("YES "+i)
        x=true;
        break;
    }else{
        x=false
    }
}
if(X=false){
    alert("NO")
}