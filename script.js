setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    document.querySelector("#hours").innerHTML = `${hours}`;
    document.querySelector("#min").innerHTML = `${min}`;
    document.querySelector("#sec").innerHTML = `${sec}`;
}, 1000)

function addtask() {
    let inputfield = document.querySelector("#taskinputfield");
    let inputvalue = inputfield.value.trim().toUpperCase();


    if (inputvalue == "") {
        return
    }

    const taskdiv = document.createElement('div');
    taskdiv.classList.add('task-item');

    const checktask = document.createElement('input');
    checktask.type = 'checkbox';
    const tasktext = document.createElement('span');
    tasktext.classList.add("tasktex");
    tasktext.textContent = inputvalue;

    const tasktime = document.createElement('p');
    tasktime.classList.add('tasktime');

    const time = new Date();
    const hours = time.getHours();
    const min = time.getMinutes();
    tasktime.textContent = `${hours} : ${min}`;


    const deletetask = document.createElement('button');
    deletetask.textContent = 'Delete';
    deletetask.onclick = function () {
        taskdiv.remove();
    }
    const checkboxandtasktext = document.createElement("div");
    checkboxandtasktext.classList.add("checkboxandtasktext");
    const taskTimeAndDeleteButton = document.createElement("div");
    taskTimeAndDeleteButton.classList.add("taskTimeAndDeleteButton");

    checkboxandtasktext.appendChild(checktask);
    checkboxandtasktext.appendChild(tasktext);
    taskTimeAndDeleteButton.appendChild(tasktime);
    taskTimeAndDeleteButton.appendChild(deletetask);

    taskdiv.appendChild(checkboxandtasktext);
    taskdiv.appendChild(taskTimeAndDeleteButton);

    let taskcontainer = document.querySelector(".taskCont");
    taskcontainer.appendChild(taskdiv);

    inputfield.value = "";
}