var students = { "MIT" : [
{ "name" : "Reymar", "gender" : "Male", "action" : "View Resume" },
{ "name" : "Cindy", "gender" : "Female", "action" : "View Resume "},
{ "name" : "Kevin", "gender" : "Male", "action" : "View Resume "},
{ "name" : "Dan", "gender" : "Male", "action" : "View Resume "},
{ "name" : "Ed", "gender" : "Male", "action" : "View Resume "},
{ "name" : "Glester", "gender" : "Male", "action" : "View Resume "},
{ "name" : "Jeffrey", "gender" : "Male", "action" : "View Resume "}
]
} 


var htmlStudents = "<tr> <th>Name</th> <th>Gender</th> <th>Action</th></tr>";
for(i=0;i<students.MIT.length;i++)
{
htmlStudents+="<table border='1'>";
//htmlStudents+="<tr><td>"+ students.MIT[i].name+"</td><td>"+ students.MIT[i].gender+"</td> <td><button type="button" class="btn btn-primary">View Resume</button></td> </tr>";
//htmlStudents+="<tr><td>"+ students.MIT[i].name+"</td><td>"+ students.MIT[i].gender+"</td> <td>"+ students.MIT[i].action+"</td> </tr>";
//htmlStudents+="<tr><td>"+ students.MIT[i].name+"</td><td>"+ students.MIT[i].gender+"</td> </tr>";
htmlStudents+="<tr><td>"+ students.MIT[i].name+"</td><td>"+ students.MIT[i].gender+"</td> <td>  "+ students.MIT[i].action+"  </td> </tr>";
}
htmlStudents += "<tr>";

var _table3 = document.getElementById('myTable3');
_table3.innerHTML = htmlStudents;
