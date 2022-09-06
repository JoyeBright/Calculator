function display(value) {
    document.getElementById("result").value += value;
}

function cal() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function Clear(){
  document.getElementById("result").value =
    "";
}
