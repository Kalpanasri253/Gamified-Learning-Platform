const API = "http://localhost:8080/students";

function saveStudent() {

    const id = document.getElementById("id").value;

    const student = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        village: document.getElementById("village").value,
        score: document.getElementById("score").value

    };

    if (id == "") {

        fetch(API, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(student)

        })

            .then(response => response.json())

            .then(data => {

                alert("Student Added Successfully");

                clearForm();

                getStudents();

            });

    }

    else {

        fetch(API + "/" + id, {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(student)

        })

            .then(response => response.json())

            .then(data => {

                alert("Student Updated Successfully");

                clearForm();

                getStudents();

            });

    }

}


function getStudents() {

    fetch(API)

        .then(response => response.json())

        .then(data => {

            const table = document.querySelector("#studentTable tbody");

            table.innerHTML = "";

            data.forEach(student => {

                table.innerHTML += `

<tr>

<td>${student.id}</td>

<td>${student.name}</td>

<td>${student.email}</td>

<td>${student.village}</td>

<td>${student.score}</td>

<td>

<button onclick="editStudent(${student.id},
'${student.name}',
'${student.email}',
'${student.village}',
${student.score})">

Edit

</button>

<button onclick="deleteStudent(${student.id})">

Delete

</button>

</td>

</tr>

`;

            });

        });

}



function editStudent(id, name, email, village, score) {

    document.getElementById("id").value = id;

    document.getElementById("name").value = name;

    document.getElementById("email").value = email;

    document.getElementById("village").value = village;

    document.getElementById("score").value = score;

}



function deleteStudent(id) {

    if (confirm("Delete this student?")) {

        fetch(API + "/" + id, {

            method: "DELETE"

        })

            .then(() => {

                alert("Student Deleted Successfully");

                getStudents();

            });

    }

}



function clearForm() {

    document.getElementById("id").value = "";

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("village").value = "";

    document.getElementById("score").value = "";

}


getStudents();
function searchStudent(){

let input=document.getElementById("search").value.toLowerCase();

let rows=document.querySelectorAll("#studentTable tbody tr");

rows.forEach(row=>{

let text=row.innerText.toLowerCase();

row.style.display=text.includes(input)?"":"none";

});

}