var n = parseInt(prompt())
var array = []
for (var i = 0;i<n;i++){
    array.push(parseInt(prompt()))
}
var ans =" "
for (var i=n-1;i>=0;i--){
    ans = ans + array[i] + " ";
}
alert(ans)