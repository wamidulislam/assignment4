let interviewCount = [];
let rejectedCount = [];

let total = document.getElementById("total")
let totalJob = document.getElementById("total job")
let interview = document.getElementById("interviewCount")
let rejected = document.getElementById("rejectedCount")

// call cards all section
const totalCards = document.getElementById("allCards")

const mainContainer = document.querySelector("main")
console.log(mainContainer)
// function for calculation
function calculateCount(){
    total.innerText = totalCards.children.length
    totalJob.innerText = totalCards.children.length
    interview.innerText = interviewCount.length;
    rejected.innerText = rejectedCount.length;
} 
    calculateCount()


// another function 
function toggleStyle(id){
    console.log('click', id)
}



