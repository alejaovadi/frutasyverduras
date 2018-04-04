function insertarBanano(){

	document.getElementById("manda").src="../img/banano.jpg"
	document.getElementById("mnd").innerHTML="BANANO"
}
function insertarPiña(){

	document.getElementById("manda").src="../img/piña.jpg"

}

function insertarUva(){

	document.getElementById("manda").src="../img/uvas.jpg"

}

document.getElementById("dani").onclick=insertarBanano;
document.getElementById("moni").onclick=insertarPiña;
document.getElementById("ale").onclick=insertarUva;