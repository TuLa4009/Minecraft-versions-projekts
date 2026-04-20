const jautajumi =  [
    {
        text: "q1.question",
        answers: ["q1.a", "q1.b", "q1.c", "q1.d"],
        correct: 2
    },
    {
        text: "q2.question",
        answers: ["q2.a", "q2.b", "q2.c", "q2.d"],
        correct: 0
    },
    {
        text: "q3.question",
        answers: ["q3.a", "q3.b", "q3.c", "q3.d"],
        correct: 2
    },
    {
        text: "q4.question",
        answers: ["q4.a", "q4.b", "q4.c", "q4.d"],
        correct: 3
    },
    {
        text: "q5.question",
        answers: ["q5.a", "q5.b", "q5.c", "q5.d"],
        correct: 1
    },
    {
        text: "q6.question",
        answers: ["q6.a", "q6.b", "q6.c", "q6.d"],
        correct: 3
    },
    {
        text: "q7.question",
        answers: ["q7.a", "q7.b", "q7.c", "q7.d"],
        correct: 1
    },
    {
        text: "q8.question",
        answers: ["q8.a", "q8.b", "q8.c", "q8.d"],
        correct: 1
    },
    {
        text: "q9.question",
        answers: ["q9.a", "q9.b", "q9.c", "q9.d"],
        correct: 2
    },
    {
        text: "q10.question",
        answers: ["q10.a", "q10.b", "q10.c", "q10.d"],
        correct: 3
    },
    {
        text: "q11.question",
        answers: ["q11.a", "q11.b", "q11.c", "q11.d"],
        correct: 3
    },
    {
        text: "q12.question",
        answers: ["q12.a", "q12.b", "q12.c", "q12.d"],
        correct: 3
    },
    {
        text: "q13.question",
        answers: ["q13.a", "q13.b", "q13.c", "q13.d"],
        correct: 2
    },
    {
        text: "q14.question",
        answers: ["q14.a", "q14.b", "q14.c", "q14.d"],
        correct: 0
    },
    {
        text: "q15.question",
        answers: ["q15.a", "q15.b", "q15.c", "q15.d"],
        correct: 3
    },
    {
        text: "q16.question",
        answers: ["q16.a", "q16.b", "q16.c", "q16.d"],
        correct: 2
    },
    {
        text: "q17.question",
        answers: ["q17.a", "q17.b", "q17.c", "q17.d"],
        correct: 3
    },
]

let jaut_tagad = 0
let izvele = null;

const jaut_teksts = document.getElementById("jaut_teksts")
const atbildes = document.getElementById("atbildes")

function IeladetJaut() {
    izvele = null
    atbildes.innerHTML = ""
    jaut_teksts.innerText = jautajumi[jaut_tagad].text
    
    jautajumi[jaut_tagad].answers.forEach((atbilde, index) => {
        const poga = document.createElement("button")
        poga.textContent = atbilde

            poga.onclick = () => {
                izvele = index
                document.querySelectorAll("button").forEach(jaut_poga => {
                    jaut_poga.classList.remove("pareizi", "nepareizi")
                    jaut_poga.style.background = "#444"
                });
                poga.style.background = "#888"
            }
        atbildes.appendChild(poga);
        });
    }
function Parbaudit() {
    if (izvele === null) return;
    const buttons = document.querySelectorAll("button")

        buttons.forEach((poga, index) => {
            if (index === jautajumi[jaut_tagad].correct) {
                poga.classList.add("pareizi")
            } else if (index === izvele) {
                poga.classList.add("nepareizi")
            }
    })
}
function Nakamais() {
    if (jaut_tagad < jautajumi.length - 1) {
        jaut_tagad++
        IeladetJaut()
    }
}
function Ieprieks() {
    if (jaut_tagad > 0) {
        jaut_tagad--
        IeladetJaut()
    }
}

IeladetJaut()
