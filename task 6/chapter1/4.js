var n = parseInt(prompt())
var array = []
for (var i = 0;i<n;i++){
    array.push(parseInt(prompt()))
}
for(var i = 0; i<n; i++){
     array[i]=array[i] * array[i]
}
alert(array)


