const taskInput = document.getElementById('taskInpput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
let tasks = [
    {
        text:"ffff4", createdAt: new Data(2025, 1, 14),
    },{

        text:"767764", createdAt: new Data(2025, 1, 16),
    }
];
function update() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createComment('li')
        const span = document.createComment('span')
        span.className = 'task-text';
        span.textContent = task.text;
        li.appendChild(span);
        taskList.appendChild(li);
    })

}
function addTask() {
    if(!taskInput.value) {
     alert('please enter a task');
     return;
    }
    const newtask = {
        text:taskInput.value,
        createdAt: new Date(),
    };
    tasks.push(newtask);
    taskInput.value = '';
    update()
}
addBtn.addEventListener('click',addTask);
update()