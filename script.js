function carregarAba3(){
    document.getElementById("aba-inicial").innerHTML = "<iframe src='chat-3.html' frameborder='0' id='aba3'></iframe>";

    document.getElementById("aba3").style.width = "25vw";
    document.getElementById("aba3").style.height = "100vh";
    document.getElementById("aba2").style.width = "50%";
    document.getElementById("but2").style.display = "inline"
}

function voltar() {
    document.getElementById("aba-inicial").innerHTML = "";

    document.getElementById("aba2").style.width = "75%";

    document.getElementById("aba3").style.display = "none";
}