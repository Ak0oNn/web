var n = parseInt(prompt())
var array = []
for(var i = 0;i<n;i++){
    array.push(parseInt(prompt()))
}
var sum=1
for(var i = 0;i<n;i++){
    if(array[i]!=0){
        sum=sum*array[i]
    }
}
alert(sum)