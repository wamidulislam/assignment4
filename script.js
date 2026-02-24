let InterviewList = [];
let RejectedList = [];

let currentStatus = 'all-job-btn';

let total = document.getElementById('Total');
let Interview = document.getElementById('Interview');
let Rejected = document.getElementById('Rejected');

const allJobBtn = document.getElementById('all-job-btn');
const interviewJobBtn = document.getElementById('interview-job-btn');
const rejectedJobBtn = document.getElementById('rejected-job-btn');

const allCardSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section');
const notFoundSection = document.getElementById('not-found-section');

function calculateCount() {
    total.innerText = allCardSection.children.length;
    Interview.innerText = InterviewList.length;
    Rejected.innerText = RejectedList.length;
}
calculateCount();

function toggleStyle(id) {
    currentStatus = id;

    
    [allJobBtn, interviewJobBtn, rejectedJobBtn].forEach(btn => {
        btn.classList.remove('bg-blue-500', 'text-white');
        btn.classList.add('bg-gray-400', 'text-black');
    });

    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-400', 'text-black');
    selected.classList.add('bg-blue-500', 'text-white');

    notFoundSection.classList.add('hidden');

    if (id === 'interview-job-btn') {
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();
    } 
    else if (id === 'rejected-job-btn') {
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    } 
    else {
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }
}