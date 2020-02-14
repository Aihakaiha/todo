var lista = document.getElementById("lista");
var input = document.getElementById("inputfield");
var btn = document.getElementById("btn")
btn.addEventListener("click", release)
input.addEventListener("keypress", releaseEnter)
function checkvalue(){
    return input.value.length;
}
function checklength(){
    return lista.length;
}
function create(){
    var node = document.createElement("li")
    var xbtn = document.createElement("button")
    xbtn.appendChild(document.createTextNode("X"))
    xbtn.classList.add("remoov")
    node.appendChild(document.createTextNode(input.value))
    lista.appendChild(node);
    node.appendChild(xbtn)
    input.value = "";
    xbtn.addEventListener("click", () => {
        node.remove() || xbtn.remove()
    });
    node.addEventListener("click", () => {
        node.classList.toggle("toggled")
    });
}
function release(){
    if (checkvalue() != 0){
        create()
    }
}
function releaseEnter(){
    if (checkvalue() != 0 && event.which == 13){
        create()
    }
}
