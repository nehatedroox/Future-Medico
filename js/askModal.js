//----------- ask-here-Modal-----------------------//

var askModal = document.getElementById("myaskId");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    askModal.style.display = "none";
};

function test(){
  askModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == askModal) {
    askModal.style.display = "none";
  }
};


