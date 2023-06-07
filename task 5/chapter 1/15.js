let tenge=parseInt(prompt("ENTER TENGE"));

if(tenge%380!=0){
    let toDollar= parseInt(tenge/380);
    let toCent = parseInt((tenge-toDollar*380)/3.8)
    alert(parseInt(tenge/380)+"USD and "+parseInt((tenge-toDollar*380)/3.8)+" cents");
}else alert("ONLY "+tenge/380+" USD")