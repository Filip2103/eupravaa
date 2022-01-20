var modal = document.getElementById("prozor");
var dugme = document.getElementById("submit");
var span = document.getElementsByClassName("zatvori")[0];

dugme.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 