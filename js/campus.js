//----------- ask-here-Modal-----------------------//

var campusModal = document.getElementById("campusId");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    campusModal.style.display = "none";
};

function test1(){
    campusModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == campusModal) {
    campusModal.style.display = "none";
  }
};


