const modal = document.querySelector("#modal")
const closeBtn = document.querySelector("#close")
const trapBtn = document.querySelector("#trap")

/* modal disappear */
closeBtn.addEventListener('click', (disappear))

function disappear () {
    document.body.removeChild(modal)
}

/*  */

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        modal.classList.remove("disappear")
        modal.classList.add("display")
    }, 10000);
}); 

