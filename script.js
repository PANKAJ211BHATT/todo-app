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
    let inputvalue = inputfield.value;

    if (inputvalue == "") {
        return
    }

    const taskdiv = document.createElement('div');
    taskdiv.classList.add('task-item');

    taskdiv.textContent = inputvalue;

    let taskcontainer = document.querySelector(".taskCont");

    taskcontainer.appendChild(taskdiv)

    inputfield.value = "";
}