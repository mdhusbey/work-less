const element = document.getElementById("button");
element.addEventListener("click", function () {
  if (document.getElementById("barger-manu").textContent === "") {
    document.getElementById("barger-manu").textContent = barger - manu;
  } else {
    document.getElementById("barger-manu").textContent = "";
  }
});

// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// var typed = new typed(".input",{
// String:["login","husbey","UX Designe","photograper"],
// typespeed: 70,
// backspeed: 60,
// loop: true
// });
