const API = "http://localhost:8080/teachers";

function saveTeacher(){

const id=document.getElementById("id").value;

const teacher={

name:document.getElementById("name").value,

email:document.getElementById("email").value,

subject:document.getElementById("subject").value

};

if(id==""){

fetch(API,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(teacher)

})

.then(res=>res.json())

.then(data=>{

alert("Teacher Added Successfully");

clearForm();

getTeachers();

});

}

else{

fetch(API+"/"+id,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(teacher)

})

.then(res=>res.json())

.then(data=>{

alert("Teacher Updated Successfully");

clearForm();

getTeachers();

});

}

}

function getTeachers(){

fetch(API)

.then(res=>res.json())

.then(data=>{

const table=document.querySelector("#teacherTable tbody");

table.innerHTML="";

data.forEach(t=>{

table.innerHTML+=`

<tr>

<td>${t.id}</td>

<td>${t.name}</td>

<td>${t.email}</td>

<td>${t.subject}</td>

<td>

<button onclick="editTeacher(${t.id},'${t.name}','${t.email}','${t.subject}')">

Edit

</button>

<button onclick="deleteTeacher(${t.id})">

Delete

</button>

</td>

</tr>

`;

});

});

}

function editTeacher(id,name,email,subject){

document.getElementById("id").value=id;

document.getElementById("name").value=name;

document.getElementById("email").value=email;

document.getElementById("subject").value=subject;

}

function deleteTeacher(id){

if(confirm("Delete Teacher?")){

fetch(API+"/"+id,{

method:"DELETE"

})

.then(()=>{

alert("Teacher Deleted");

getTeachers();

});

}

}

function clearForm(){

document.getElementById("id").value="";

document.getElementById("name").value="";

document.getElementById("email").value="";

document.getElementById("subject").value="";

}

getTeachers();
function searchTeacher(){

let input=document.getElementById("search").value.toLowerCase();

let rows=document.querySelectorAll("#teacherTable tbody tr");

rows.forEach(row=>{

let text=row.innerText.toLowerCase();

row.style.display=text.includes(input)?"":"none";

});

}