let modal = document.getElementById("callbackModal")
let showBtn = document.getElementById("modalShow")
let closeSpan = document.getElementsByClassName("close")[0]


showBtn.onclick = function () {
    modal.style.display  = "block"
}

closeSpan.onclick = function() {
    modal.style.display  = "none"
}

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        modal.style.display  = "none"
    }
  });
