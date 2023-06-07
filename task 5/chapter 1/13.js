let Choose = prompt("Choose your branch:'\n'1 - Science, 2 - Humanitarian subjects, 3 - Art, 4 - Sport:")
if(Choose==1){
    let one = prompt("1 - Math, 2 - Physics:")
    if(one==1){
        alert("You are Financier")
    }if (one==2){
        alert("You are Engineer")
    }
}if(Choose==2){
    let two = prompt("1 - History, 2 - Foreign Languages:")
    if(two==1){
        alert("You are Historic or Diplomat ")
    }if(two==2){
        alert("You are Translator")
    }
}if(Choose==3){
    let three = prompt("1 - Drawing, 2 -Singing:")
    if(three==1){
        alert("You are Painter or Architect")
    }if(three==2){
        alert("You are Singer or Tamada")
    }
}if(Choose==4){
    let four = prompt ("1 - Team, 2 - Individual:")
    if(four==1){
        alert("You are footballer or Basketball player")
    }if(four==2){
        alert("You are boxer or tennis player")
    }
}