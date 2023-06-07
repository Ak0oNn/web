var array = []
var sum = 1
var k=0
while(true){
    var x =parseInt(prompt())
    if(x==0) break
    array.push(x)
    k++
}
for(var i = 0;i<array.length;i++){
    sum = sum*array[i]
}
alert(Math.pow(sum, 1/k))