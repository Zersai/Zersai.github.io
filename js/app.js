var number = 1;
var number2 = 100;
var number3 = 1000;
var number4 = 10000;
var tempNumber = 1;
var tempNumber2 = 100;
var tempNumber3 = 1000;
var tempNumber4 = 10000;
var amount = 5000.00;
function add(){
  if (!("id" in localStorage)){
    localStorage.setItem("id", number);
    localStorage.setItem("id2", number2);
    localStorage.setItem("id3", number3);
    localStorage.setItem("id4", number4);
  }
  temp = parseInt(localStorage.getItem("id"));
  temp2 = parseInt(localStorage.getItem("id2"));
  temp3 = parseInt(localStorage.getItem("id3"));
  temp4 = parseInt(localStorage.getItem("id4"));
  var beschreibung = document.getElementById("name");
  localStorage.setItem(localStorage.getItem("id"), beschreibung.value);
  var datum = document.getElementById("date");
  localStorage.setItem(localStorage.getItem("id2"), datum.value);
  var geld = document.getElementById("money");
  localStorage.setItem(localStorage.getItem("id4"), geld.value);
    if (parseInt(localStorage.getItem("id")) == 1){
    localStorage.setItem(localStorage.getItem("id3"), amount-geld.value)
  }else{
    amount = parseInt(localStorage.getItem(parseInt(localStorage.getItem("id3"))-1))-geld.value;
    localStorage.setItem(localStorage.getItem("id3"), amount);
  }
  temp++;
  temp2++;
  temp3++;
  temp4++;
  localStorage.setItem("id", temp);
  localStorage.setItem("id2", temp2);
  localStorage.setItem("id3", temp3);
  localStorage.setItem("id4", temp4);
}

for (let i = 0; i < localStorage.getItem("id")-1; i++) {
  output.innerHTML += "<tr><td>"+localStorage.getItem(tempNumber+i)+"</td><td>"+localStorage.getItem(tempNumber2+i)+"</td><td>"+localStorage.getItem(tempNumber3+i)+"</td><td>"+"-"+localStorage.getItem(tempNumber4+i)+"</td></tr>"
}