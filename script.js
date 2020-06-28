var lista = [ "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

lista.sort();

var listaCognomi = document.getElementById('listaCognomi');

var cognomeUtente = prompt("Dimmi il tuo cognome");
listaCognomi.innerHTML = "";

lista.push(cognomeUtente);
lista.sort();



for (var i = 0; i < lista.length; i++) {
  listaCognomi.innerHTML += "<li>" + lista[i] + "</li>";
}

document.getElementById('indice').innerHTML = lista.indexOf(cognome)+1;
