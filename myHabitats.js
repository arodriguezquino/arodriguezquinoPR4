var tbody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
const array = [{"titulo":"Piso mediano centro Bilbao","localidad":"Bilbao","m2":"108","hab":"2","bany":"1","fotos":"/hab1","precio":"1100€"},{"titulo":"Casa grande afueras Gerona","localidad":"Gerona","m2":"200","hab":"3","bany":"2","fotos":"/hab2","precio":"450000€"},{"titulo":"Estudio perfecto Barcelona rambla","localidad":"Barcelona","m2":"50","hab":"1","bany":"1","fotos":"/hab3","precio":"600€"},{"titulo":"Estudio magnifico centro Madrid sol","localidad":"Madrid","m2":"20","hab":"1","bany":"1","fotos":"/hab4","precio":"500€"},{"titulo":"Mansion Sevilla afueras","localidad":"Sevilla","m2":"1008","hab":"6","bany":"3","fotos":"/hab5","precio":"2500€"},{"titulo":"Casa Asturias centro","localidad":"Asturias","m2":"135","hab":"3","bany":"2","fotos":"/hab6","precio":"205999€"}];

for(let i = 0; i < array.length; i++) {
  if(i%2==0) {
    var newRow = tbody.insertRow();
  }
  var newCell = newRow.insertCell();
  var newDiv = document.createElement("div");
  newDiv.appendChild(document.createTextNode(array[i].titulo));
  newDiv.appendChild(document.createElement("br"));
  newDiv.appendChild(document.createTextNode(array[i].fotos));
  newDiv.appendChild(document.createElement("br"));
  var newSqm = document.createElement("p")
  newSqm.innerText = "m²: "+array[i].m2;
  newSqm.style.float = "left";
  var hab = document.createElement("p");
  hab.innerText = " hab: "+array[i].hab;
  hab.style.float = "right";
  newDiv.appendChild(newSqm);
  newDiv.appendChild(hab);

  newDiv.style.background = "white";
  newDiv.style.color = "black";
  newDiv.style.padding = "10px";
  newDiv.style.borderRadius = "5px";
  newDiv.style.marginRight = "15px";
  newDiv.style.textAlign = "center";

  newCell.appendChild(newDiv);
}
