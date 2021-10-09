function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

/*-------form submitting function----------------------------*/
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

//connect one page to another----

$(function () {
  $(".divID").load("mbbs.html");

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

});


// show more and show less buttton-on--college--page-------------------
function toggleText() {
  var points =
    document.getElementById("points");

  var showMoreText =
    document.getElementById("moreText");

  var buttonText =
    document.getElementById("textButton");
  if (points.style.display === "none") {
    showMoreText.style.display = "none";
    points.style.display = "inline";
    buttonText.innerHTML = "Show More"+ "<span class='glyphicon glyphicon-arrow-down'  style='font-size: 12px; font-weight: 0px;'></span>";
  }
  else {
    showMoreText.style.display = "inline";
    points.style.display = "none";
    buttonText.innerHTML = "Show Less"+
    "<span class='glyphicon glyphicon-arrow-up'  style='font-size: 12px; font-weight: 0px;'></span>";
  }
}

// view more and view less buttton--on--college---page-----------------
function toggleText1() {
  var points1 =
    document.getElementById("points1");

  var showMoreText1 =
    document.getElementById("moreText1");

  var buttonText =
    document.getElementById("textButton1");
  if (points1.style.display === "none") {
    showMoreText1.style.display = "none";
    points1.style.display = "inline";
    buttonText.innerHTML = "View More"+"<span class='glyphicon glyphicon-arrow-down'  style='font-size: 12px; font-weight: 0px;'></span>";
  }
  else {
    showMoreText1.style.display = "inline";
    points1.style.display = "none";
    buttonText.innerHTML = "View Less"+"<span class='glyphicon glyphicon-arrow-up'  style='font-size: 12px; font-weight: 0px;'></span>";
   
  }
}
