const jautajumi =  [
    {
        text: "Jaut1",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut2",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut3",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut4",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut5",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut6",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut7",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut8",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut9",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut10",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut11",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut12",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut13",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut14",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut15",
        answers: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        text: "Jaut16",
        answers: ["1", "2", "3", "4"],
        correct: 0
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