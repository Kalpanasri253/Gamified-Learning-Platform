const API = "http://localhost:8080/questions";

function saveQuestion() {

    const id = document.getElementById("id").value;

    const question = {

        quizId: document.getElementById("quizId").value,
        questionText: document.getElementById("questionText").value,
        optionA: document.getElementById("optionA").value,
        optionB: document.getElementById("optionB").value,
        optionC: document.getElementById("optionC").value,
        optionD: document.getElementById("optionD").value,
        correctAnswer: document.getElementById("correctAnswer").value

    };

    const method = id ? "PUT" : "POST";
    const url = id ? API + "/" + id : API;

    fetch(url, {

        method: method,

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(question)

    })

    .then(res => res.json())

    .then(() => {

        alert(id ? "Question Updated Successfully" : "Question Added Successfully");

        clearForm();

        getQuestions();

    });

}

function getQuestions() {

    fetch(API)

    .then(res => res.json())

    .then(data => {

        const table = document.querySelector("#questionTable tbody");

        table.innerHTML = "";

        data.forEach(q => {

            table.innerHTML += `

<tr>

<td>${q.id}</td>

<td>${q.quizId}</td>

<td>${q.questionText}</td>

<td>${q.correctAnswer}</td>

<td>

<button onclick="editQuestion(${q.id},
${q.quizId},
'${q.questionText}',
'${q.optionA}',
'${q.optionB}',
'${q.optionC}',
'${q.optionD}',
'${q.correctAnswer}')">

Edit

</button>

<button onclick="deleteQuestion(${q.id})">

Delete

</button>

</td>

</tr>

`;

        });

    });

}

function editQuestion(id, quizId, questionText, optionA, optionB, optionC, optionD, correctAnswer) {

    document.getElementById("id").value = id;
    document.getElementById("quizId").value = quizId;
    document.getElementById("questionText").value = questionText;
    document.getElementById("optionA").value = optionA;
    document.getElementById("optionB").value = optionB;
    document.getElementById("optionC").value = optionC;
    document.getElementById("optionD").value = optionD;
    document.getElementById("correctAnswer").value = correctAnswer;

}

function deleteQuestion(id) {

    if (confirm("Delete this Question?")) {

        fetch(API + "/" + id, {

            method: "DELETE"

        })

        .then(() => {

            alert("Question Deleted Successfully");

            getQuestions();

        });

    }

}

function clearForm() {

    document.getElementById("id").value = "";
    document.getElementById("quizId").value = "";
    document.getElementById("questionText").value = "";
    document.getElementById("optionA").value = "";
    document.getElementById("optionB").value = "";
    document.getElementById("optionC").value = "";
    document.getElementById("optionD").value = "";
    document.getElementById("correctAnswer").value = "";

}

getQuestions();
function searchQuestion(){

    let input = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#questionTable tbody tr");

    rows.forEach(row => {

        let text = row.innerText.toLowerCase();

        row.style.display = text.includes(input) ? "" : "none";

    });

}