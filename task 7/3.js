var array = []
while(true){
    var x =parseInt(prompt())
    if(x==0) break
    array.push(x)
}
var arr=[]
for(var i = 0;i<array.length;i++){
    if(array[i]>0){
        arr.push(array[i])
    }
}
alert(arr)