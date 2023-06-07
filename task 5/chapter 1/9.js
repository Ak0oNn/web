let y = parseInt(prompt("INSERT YOUR AMOUNT IN KZT: 1- CONVERT TO USD   2- CONVERT TO EUR  3- CONVERT TO GBP"))
let x = parseInt(prompt())
let sum=''
if(y==1){
    sum=x/380
    alert(x+" KZT = "+sum+" USD")
}if (y==2) {
    sum=x/430
    alert(x+" KZT = "+sum+" USD")
}if (y==3) {
    sum=x/480
    alert(x+" KZT = "+sum+" USD")
}     
        
    