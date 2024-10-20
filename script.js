setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    document.querySelector(".CurrenttimeCont").innerHTML = `${hours} : ${min} : ${sec}`;
}, 1000)


