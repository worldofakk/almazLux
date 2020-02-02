let modal = document.getElementById("callbackModal")
let showBtn = document.getElementById("modalShow")
let closeSpan = document.getElementsByClassName("close")[0]


showBtn.onclick = function () {
    modal.style.display  = "block"
}

closeSpan.onclick = function() {
    modal.style.display  = "none"
}

window.onclick = function (even) {
    if (event.target == modal) {
        modal.style.display  = "none"
    }
}

