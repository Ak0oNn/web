let students = [
    {"name": "Ayan", "surname": "Nurgali", "gpa":4},
    {"name": "Shyngys", "surname": "Abubakir", "gpa":3.9},
    {"name": "Parasat", "surname": "Amanbek", "gpa":3.8},
    {"name": "Dulat", "surname": "Saparbayev", "gpa":3},
    {"name": "Nursultan", "surname": "Zhadrasyn", "gpa":2.9}
]

let list=""

while(true){
    let x = parseInt(prompt("PRESS 1 TO ADD STUDENT, \n PRESS 2 TO LIST STUDENTS, \n PRESS 0 TO EXIT "))
    if(x===1){
        let name=prompt("Insert name of student:")
        let surname=prompt("Insert surname of student:")
        let gpa = parseInt(prompt("Insert gpa of student:"))
        let stud={name: name, surname:surname, gpa:gpa}
        students.push(stud) 
    }else if (x===2){
        for(let i = 0;i<students.length;i++){
            list += students[i]["name"] + " - " + students[i]["surname"] + " - " + students[i]["gpa"] + "\n"
        }
        if(students.length>0){
            alert(list)
        }else{
            alert("No students found.")
        }
    }else if (x===0){
        break;
    }
}