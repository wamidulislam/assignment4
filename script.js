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

mainContainer.addEventListener('click', function (event) {

    const card = event.target.closest('.card');
    if (!card) return;

    const fristCorp = card.querySelector('.fristCorp').innerText;
    const nativeDeveloper = card.querySelector('.nativeDeveloper').innerText;
    const remoteJob = card.querySelector('.remoteJob').innerText;
    const notes = card.querySelector('.notes').innerText;

    if (event.target.classList.contains('interview-btn')) {

        card.querySelector('.status').innerText = 'Interview';

        const cardInfo = { fristCorp, nativeDeveloper, remoteJob, status: 'Interview', notes };

        if (!InterviewList.find(item => item.fristCorp === fristCorp)) {
            InterviewList.push(cardInfo);
        }

        RejectedList = RejectedList.filter(item => item.fristCorp !== fristCorp);

        calculateCount();

        if (currentStatus === 'interview-job-btn') renderInterview();
        if (currentStatus === 'rejected-job-btn') renderRejected();
    }

    if (event.target.classList.contains('rejected-btn')) {

        card.querySelector('.status').innerText = 'Rejected';

        const cardInfo = { fristCorp, nativeDeveloper, remoteJob, status: 'Rejected', notes };

        if (!RejectedList.find(item => item.fristCorp === fristCorp)) {
            RejectedList.push(cardInfo);
        }

        InterviewList = InterviewList.filter(item => item.fristCorp !== fristCorp);

        calculateCount();

        if (currentStatus === 'interview-job-btn') renderInterview();
        if (currentStatus === 'rejected-job-btn') renderRejected();
    }

    if (event.target.closest('.btn-delete')) {
        InterviewList = InterviewList.filter(item => item.fristCorp !== fristCorp);
        RejectedList = RejectedList.filter(item => item.fristCorp !== fristCorp);

        card.remove();
        calculateCount();

        if (currentStatus === 'interview-job-btn') renderInterview();
        if (currentStatus === 'rejected-job-btn') renderRejected();
    }
});

function renderInterview() {
    filteredSection.innerHTML = '';

    if (InterviewList.length === 0) {
        notFoundSection.classList.remove('hidden');
        return;
    }

    notFoundSection.classList.add('hidden');

    InterviewList.forEach(job => {
        const div = document.createElement('div');
        div.className = 'card flex justify-between border shadow-lg p-8';

        div.innerHTML = `
            <div class="space-y-4">
                <h1 class="fristCorp text-2xl font-semibold">${job.fristCorp}</h1>
                <p class="nativeDeveloper text-gray-400">${job.nativeDeveloper}</p>
                <p class="remoteJob text-gray-400">${job.remoteJob}</p>
                <p class="status">${job.status}</p>
                <p class="notes">${job.notes}</p>

                <div class="flex gap-3">
                    <button class="interview-btn border border-green-400 px-4 py-2 text-green-400">Interview</button>
                    <button class="rejected-btn border border-red-400 px-4 py-2 text-red-400">Rejected</button>
                </div>
            </div>

            <button class="btn-delete">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;

        filteredSection.appendChild(div);
    });
}

function renderRejected() {
    filteredSection.innerHTML = '';

    if (RejectedList.length === 0) {
        notFoundSection.classList.remove('hidden');
        return;
    }

    notFoundSection.classList.add('hidden');

    RejectedList.forEach(job => {
        const div = document.createElement('div');
        div.className = 'card flex justify-between border shadow-lg p-8';

        div.innerHTML = 
            ` <!-- main part-1 -->
             <div class="space-y-6">
                <!-- part -1 -->
                 <div>
                    <h1 class="fristCorp text-2xl font-semibold">${job.fristCorp}</h1>
                <p class="nativeDeveloper text-gray-400">${job.nativeDeveloper}</p>
                 </div>
                 <!-- part -2 -->
                  <div>
                    <p class="remoteJob text-gray-400">${job.remoteJob}</p>
                  </div>
                  <!-- part -3 -->
                    <p class="status">${job.status}</p>
                    <p class="notes ">${job.notes}</p> 

                    <div class="flex gap-3">
                        <button class="interview-btn shadow-lg border border-green-400 px-4 py-2 text-green-400 font-bold rounded-sm ">interview</button>
                        <button class="rejected-btn shadow-lg border border-red-400 px-4 py-2 text-red-400 font-bold rounded-sm">Rejected</button>
                    </div>
             </div>
             <!-- main part-2 -->
              <div >
               <button class="btn-delete" > <i class="fa-regular fa-trash-can"></i></button>
              </div>
        `
        ;

        filteredSection.appendChild(div);
    });
}