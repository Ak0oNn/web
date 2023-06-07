books = [

    {"name":"Harry Potter and the Philosopher's Stone", "author": "Joanne Rowling", "ISBN": "1233123", "price": "50$"},

    {"name":"A Game of Thrones", "author": "George R. R. Martin", "ISBN": "123456", "price": "30$"},

    {"name":"Harry Potter and the Chamber of Secrets", "author": "Joanne Rowling", "ISBN": "123789", "price": "40$"},

    {"name":"A Dance with Dragons", "author": "George R. R. Martin", "ISBN": "123321", "price": "70$"},

    {"name":"Harry Potter and the Prisoner of Azkaban", "author": "Joanne Rowling", "ISBN": "123654", "price": "49$"},

    {"name":"A Storm of Swords", "author": "George R. R. Martin", "ISBN": "123987", "price": "80$"},
];

var text = "";
for(var i=0;i<books.length;i++){
    text+=books[i].name+" - "+books[i].author+" - "+books[i].ISBN+" - "+books[i].price+'\n';
} 
alert(text);

var bookAuthor = prompt("Author")
var check=false
for(var i=0;i<books.length;i++){
    if(bookAuthor==books[i]["author"]){
        check=true
    }
}
if(check){
    alert(books[i].name+" - "+books[i].author+" - "+books[i].ISBN+" - "+books[i].price+'\n')
}else{
    alert("Book not a found")
}
