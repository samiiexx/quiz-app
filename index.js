// Copyright 2021 sfchi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

// const quiz = document.getElementById('quiz')
// const answerElements = document.querySelectorAll('.answer')
// const questionElement = document.getElementById('question')
// const aText = document.getElementById('a_text')
// const bText = document.getElementById('b_text')
// const cText = document.getElementById('c_text')
// const dText = document.getElementById('d_text')
// const submit = document.getElementById('submit')

// // use let when the value is going to be changed or reassigned, use const when the value is not changing
// let currentQuiz = 0
// let score = 0

// loadQuiz()

// function loadQuiz() {
//     deselectAnswers()

//     const currentQuizData = quizData[currentQuiz]

//     questionElement.innerText = currentQuizData.question
//     aText.innerText = currentQuizData.a
//     bText.innerText = currentQuizData.b
//     cText.innerText = currentQuizData.c
//     dText.innerText = currentQuizData.d
// }

// function deselectAnswers() {
//     answerElements.forEach(answerElement => answerElement.checked = false)
// }

// function getSelected() {
//     let answer

//     answerElements.forEach(answerElement => {
//         if(answerElement.checked) {
//             answer = answerElement.id
//         }
//     })
//     return answer
// }

// submit.addEventListener('click', () => {
//     const answer = getSelected()

//     if(answer) {
//         if(answer === quizData[currentQuiz].correct){
//             score++
//         }

//         currentQuiz++

//         if(currentQuiz < quizData.length) {
//             loadQuiz()

//         }
//         else{
//             quiz.innerHTML = `
//                 <h2>You answered ${score}/${quizData.length} questions correctly</h2>

//                 <button onclick="location.reload()">Reload</button>
//             `
//         }
//     }
// })
