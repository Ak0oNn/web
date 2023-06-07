// cars = [
//     {"name":"Mercedes", "year":"2015", "ENGINE":"2.4", "price":"12000000"},
//     {"name":"Mercedes", "year":"2012", "ENGINE":"3.0", "price":"8000000"},
//     {"name":"Mercedes", "year":"2018", "ENGINE":"5.5", "price":"220000000"},
//     {"name":"BMW", "year":"2020", "ENGINE":"3.2", "price":"180000000"},
//     {"name":"BMW", "year":"2015", "ENGINE":"4.4", "price":"150000000"},
//     {"name":"BMW", "year":"2018", "ENGINE":"5.5", "price":"220000000"},
//     {"name":"Toyota", "price":"12000000", "year":"2015", "ENGINE":"2.2"},
//     {"name":"Mercedes", "price":"70000000", "year":"2018", "ENGINE":"3.8"},
//     {"name":"Toyota", "price":"7000000", "year":"2013", "ENGINE":"2.0"},
//     {"name":"BMW", "price":"11000000", "year":"2011", "ENGINE":"3.0"},
//     {"name":"Lexus", "price":"60000000", "year":"2017", "ENGINE":"5.7"}
// ] 
// var list=""
// for(let i = 0; i < cars.length; i++){
//         list += car[i]["name"] + " - " +car[i]["year"] + " - "+car[i]["ENGINE"] + " liters - "+car[i]["price"] + " KZT" + "\n"
// }
// alert(list)

cars = [

    {"name":"Toyota", "price": 12000000, "year": 2015, "volume": 2.2},

    {"name":"Mercedes", "price": 70000000, "year": 2018, "volume": 3.8},

    {"name":"Toyota", "price": 7000000, "year": 2013, "volume": 2.0},

    {"name":"BMW", "price": 11000000, "year": 2011, "volume": 3.0},

    {"name":"Lexus", "price": 60000000, "year": 2017 ,"volume": 5.7}

];
var text = "";
for(var i=0;i<cars.length;i++){
    text+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n";
}
alert(text);

let choice=parseInt(prompt("INSERT \n [1] TO SEARCH BY NAME INSERT \n [2] TO SEARCH BY YEAR INSERT \n [3] TO SEARCH BY ENGINE VOLUME INSERT \n [4] TO SEARCH BY PRICE INSERT \n [5] TO EXIT"))
if(choice===1){
    let nameCar=prompt("INSERT NAME OF CAR:")
    for(let i = 0; i < cars.length; i++){
        if(nameCar==car.name){
            text+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n"
            alert(text)
        }
    }
}
else if(choice===2){
    var yaerCarStart=prompt("INSERT YEAR START FROM:")
    var yearCarEnd=prompt("INSERT YEAR ENDS FROM:")
    for(var i=0;i<cars.lenght;i++){
        if(yaerCarStart<=cars[i].year&&yearCarEnd>=cars[i].year){
            text+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n"
            alert(text)
        }
    }
}
else if(choice===3){
    var engineCarStart=prompt("INSERT ENGINE VOLUME START FROM:")
    var engineCarEnd = prompt("INSERT ENGINE VOLUME ENDS FROM:")
    for(var i=0;i<cars.lenght;i++){
        if(engineCarStart<=cars[i].ENGINE&&engineCarEnd>=cars[i].ENGINE){
            text+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n"
        }
    }
    alert(list)
}
else if(choice===4){
    var priceCarStart=prompt("INSERT PRICE START FROM:")
    var priceCarEnd=prompt("INSERT PRICE ENDS FROM:")
    for(var i=0;i<cars.lenght;i++){
        if(priceCarStart<=cars[i].price&&priceCarEnd>=cars[i].price){
            list += car[i]["name+"] + " - " +car[i]["year"] + " - "+car[i]["ENGINE"] + " liters - "+car[i]["price"] + " KZT" + "\n"
            alert(list) 
        }
    }
}



