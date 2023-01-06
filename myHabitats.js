var tbody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
const array = [{"titulo":"Piso mediano centro Vizcaya","localidad":"Vizcaya","m2":"108","hab":"2","bany":"1","fotos":"img/hab1.jpg","precio":"1100€"},{"titulo":"Casa grande afueras Gerona","localidad":"Gerona","m2":"200","hab":"3","bany":"2","fotos":"img/hab2.jpg","precio":"450000€"},{"titulo":"Estudio perfecto Barcelona rambla","localidad":"Barcelona","m2":"50","hab":"1","bany":"1","fotos":"img/hab3.jpg","precio":"600€"},{"titulo":"Estudio magnifico centro Madrid sol","localidad":"Madrid","m2":"20","hab":"1","bany":"1","fotos":"img/hab4.jpg","precio":"500€"},{"titulo":"Mansion Sevilla afueras","localidad":"Sevilla","m2":"1008","hab":"6","bany":"3","fotos":"img/hab5.jpg","precio":"2500€"},{"titulo":"Casa Asturias centro","localidad":"Asturias","m2":"135","hab":"3","bany":"2","fotos":"img/hab6.jpg","precio":"205999€"},{"titulo":"Masia Vizcaya afueras","localidad":"Vizcaya","m2":"1050","hab":"5","bany":"3","fotos":"img/hab7.jpg","precio":"505999€"}];

var url = new URL(window.location.href);
var prov = url.searchParams.get("provincias")

const auxArray = [];
let j = 0;
for(let i = 0; i < array.length; i++){
  if(array[i].localidad == prov) {
    auxArray[j] = array[i];
    j++;
  }
}

for(let i = 0; i < auxArray.length; i++) {
  if(i%2==0) {
    var newRow = tbody.insertRow();
  }
  var newCell = newRow.insertCell();
  var newDiv = document.createElement("div");
  newDiv.appendChild(document.createTextNode(auxArray[i].titulo));
  newDiv.appendChild(document.createElement("br"));
  
  var newSlide = document.createElement("img");
  
  newSlide.src = auxArray[i].fotos;
  newSlide.height = "50px";
  newSlide.width = "50px";
  
  newDiv.appendChild(newSlide);
  newDiv.appendChild(document.createElement("br"));
  var newSqm = document.createElement("p")
  newSqm.innerText = auxArray[i].m2+"m²";
  newSqm.style.float = "left";
  var hab = document.createElement("p");
  hab.innerText = auxArray[i].hab+" hab";
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
