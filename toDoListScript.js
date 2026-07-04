let arrList = JSON.parse(localStorage.getItem('arrList')) || [];
let doneList = JSON.parse(localStorage.getItem('doneList')) || [];


startToDoList();

function startToDoList(){
  const listBox = document.querySelector('.js-list-box');
  listBox.innerHTML = '';
  arrList.forEach((value, index)=>{
    const activityName = value.activity;
    const dateToDo = value.dates;
    const timeToDo = value.time
    
    const todoHTML = `
      <div class="todo-item col-12 col-md-12">
      <button class="done-button col-2 col-md-1 m-1" data-index="${index}">Done</button>
        <div class="activity col-5">${activityName}</div>
        <div class="date col-3">${dateToDo}</div>
        <div class="time col-2">${timeToDo}</div>
      </div>
      `;
    listBox.innerHTML += todoHTML;
  });
  if(arrList.length === 0){
    listBox.innerHTML += `
    <div class='no-list col-12 text-center'>Make your day with our To-Do-List.</div>
    `;
  }
  DoneActivity();
  completedActivity();
  deleteDone();
}


document.querySelector('.add-to-do-button')
  .addEventListener('click', ()=>{
    const activity = getActivity().trim();
    const date = getDate();
    const time = getTime();

    if (!activity || !date || !time) {
      alert("Please fill in activity, date, and time");
      return; 
    }

    arrList.push({
      activity,
      dates: formatDate(date),
      time
    });
    saveToLocalStorage();
    startToDoList();
})

// get what we input the to-do in the input box 
function getActivity(){
  return document.querySelector('#input-activity').value;
};

function getDate(){
  return document.querySelector('#input-date').value;
};

function getTime(){
  return document.querySelector('#input-time').value;
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
};

function DoneActivity(){
  document.querySelectorAll('.done-button').forEach((button) =>{
    button.addEventListener('click', (e)=>{
      const index = e.target.dataset.index;
      doneList.push(arrList[index]);
      arrList.splice(index, 1);
      saveToLocalStorage();
      startToDoList();
    })
  })
};

function completedActivity(){
  let completedActivityHTML = '';
  if(doneList.length === 0){
    completedActivityHTML += `
      <div class ="no-completed col-12 text-center">
        No completed activities yet!
      </div>
    `;
  }else{
    doneList.forEach((done, index)=>{
      completedActivityHTML += `
      <div class="done-item col-12 col-md-12 d-flex">
      <button class="delete-button col-2 col-md-1 m-1" data-index="${index}">Delete</button>
        <div class="done-to-do col-5"><del>${done.activity}</del></div>
        <div class="done-date col-3 "><del>${done.dates}</del></div>
        <div class="done-time col-2"><del>${done.time}</del></div>
      </div>
      `;
    });
  }
  document.querySelector('.done-list-box').innerHTML = completedActivityHTML;
}

function deleteDone(){
  document.querySelectorAll('.delete-button')
    .forEach((button)=>{
      button.addEventListener('click',(e)=>{
        const index = e.target.dataset.index;
        doneList.splice(index, 1);
        saveToLocalStorage();
        startToDoList();
      })
    });
}

function saveToLocalStorage() {
  localStorage.setItem('arrList', JSON.stringify(arrList));
  localStorage.setItem('doneList', JSON.stringify(doneList));
}
