setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    document.querySelector("#hours").innerHTML = `${hours}`;
    document.querySelector("#min").innerHTML = `${min}`;
    document.querySelector("#sec").innerHTML = `${sec}`;
}, 1000)


