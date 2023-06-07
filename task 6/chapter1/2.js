var n = parseInt(prompt())
var array = []
for (var i = 0;i<n;i++){
    array.push(parseInt(prompt()))
}
var max = ' '
for(var i=0;i<n;i++){
    if(array[i]>max){
        max=array[i]
    }
}
alert(max)