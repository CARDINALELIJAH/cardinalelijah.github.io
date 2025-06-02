function myFunction() {
  hide_element(document.getElementById("uggo"));
    hide_element(document.getElementById("llama"));
}


function hide_element(x){
if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}
hide_element(document.getElementById("uggo"));
hide_element(document.getElementById("llama"));