const API = "http://localhost:8080/scores";

function saveScore() {

    const id = document.getElementById("id").value;

    const score = {
        studentId: document.getElementById("studentId").value,
        quizId: document.getElementById("quizId").value,
        marks: document.getElementById("marks").value,
        totalMarks: document.getElementById("totalMarks").value
    };

    const method = id ? "PUT" : "POST";
    const url = id ? API + "/" + id : API;

    fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(score)
    })
    .then(res => res.json())
    .then(() => {
        alert(id ? "Score Updated Successfully" : "Score Added Successfully");
        clearForm();
        getScores();
    });

}

function getScores() {

    fetch(API)
    .then(res => res.json())
    .then(data => {

        const table = document.querySelector("#scoreTable tbody");

        table.innerHTML = "";

        data.forEach(score => {

            table.innerHTML += `
            <tr>
                <td>${score.id}</td>
                <td>${score.studentId}</td>
                <td>${score.quizId}</td>
                <td>${score.marks}</td>
                <td>${score.totalMarks}</td>
                <td>
                    <button onclick="editScore(${score.id},${score.studentId},${score.quizId},${score.marks},${score.totalMarks})">Edit</button>

                    <button onclick="deleteScore(${score.id})">Delete</button>
                </td>
            </tr>
            `;

        });

    });

}

function editScore(id, studentId, quizId, marks, totalMarks) {

    document.getElementById("id").value = id;
    document.getElementById("studentId").value = studentId;
    document.getElementById("quizId").value = quizId;
    document.getElementById("marks").value = marks;
    document.getElementById("totalMarks").value = totalMarks;

}

function deleteScore(id) {

    if (confirm("Delete this Score?")) {

        fetch(API + "/" + id, {
            method: "DELETE"
        })
        .then(() => {
            alert("Score Deleted Successfully");
            getScores();
        });

    }

}

function clearForm() {

    document.getElementById("id").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("quizId").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("totalMarks").value = "";

}

getScores();
function searchScore(){

    let input=document.getElementById("search").value.toLowerCase();

    let rows=document.querySelectorAll("#scoreTable tbody tr");

    rows.forEach(row=>{

        let text=row.innerText.toLowerCase();

        row.style.display=text.includes(input)?"":"none";

    });

}