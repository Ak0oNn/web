let time = parseInt(prompt())
if(time%60!=0){
    alert (parseInt(time/60)+" HOURS and "+time%60+" MINUTES")
}else{
    alert("ONLY "+time/60+" HOURS")
}