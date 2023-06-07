var n = parseInt(prompt())
var array = []
for (var i = 0;i<n;i++){
    array.push(parseInt(prompt()))
}
var sum =parseInt(0)
var k ="0"
for(var i = 0; i<n; i++){
    sum = sum + array[i]
    k++
}
alert(sum+" "+sum/k)


