const API = "http://localhost:8080/quizzes";

function saveQuiz() {

    const id = document.getElementById("id").value;

    const quiz = {
        subject: document.getElementById("subject").value,
        title: document.getElementById("title").value,
        totalMarks: document.getElementById("totalMarks").value
    };

    const method = id ? "PUT" : "POST";
    const url = id ? API + "/" + id : API;

    fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(quiz)
    })
    .then(res => res.json())
    .then(() => {
        alert(id ? "Quiz Updated Successfully" : "Quiz Added Successfully");
        clearForm();
        getQuizzes();
    });
}

function getQuizzes() {

    fetch(API)
    .then(res => res.json())
    .then(data => {

        const table = document.querySelector("#quizTable tbody");

        table.innerHTML = "";

        data.forEach(q => {

            table.innerHTML += `
            <tr>
                <td>${q.id}</td>
                <td>${q.subject}</td>
                <td>${q.title}</td>
                <td>${q.totalMarks}</td>
                <td>
                    <button onclick="editQuiz(${q.id},'${q.subject}','${q.title}',${q.totalMarks})">Edit</button>
                    <button onclick="deleteQuiz(${q.id})">Delete</button>
                </td>
            </tr>
            `;
        });
    });

}

function editQuiz(id, subject, title, totalMarks) {

    document.getElementById("id").value = id;
    document.getElementById("subject").value = subject;
    document.getElementById("title").value = title;
    document.getElementById("totalMarks").value = totalMarks;
}

function deleteQuiz(id) {

    if (confirm("Delete this quiz?")) {

        fetch(API + "/" + id, {
            method: "DELETE"
        })
        .then(() => {
            alert("Quiz Deleted Successfully");
            getQuizzes();
        });

    }
}

function clearForm() {

    document.getElementById("id").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("title").value = "";
    document.getElementById("totalMarks").value = "";
}

getQuizzes();
function searchQuiz(){

let input=document.getElementById("search").value.toLowerCase();

let rows=document.querySelectorAll("#quizTable tbody tr");

rows.forEach(row=>{

let text=row.innerText.toLowerCase();

row.style.display=text.includes(input)?"":"none";

});

}