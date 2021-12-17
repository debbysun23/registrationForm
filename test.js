var length_fn;
var length_ln;
var length_sub;
var time;
var chek;

var selectedRow = null; 
var addForm = document.forms["submit"];
addForm.addEventListener("submit", function (e) {
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } 
  else {
    updateRecord(formData);
  }

  resetForm();
  displayCovidList();
  clearCb();
});

function readFormData() {
  var formData = {};
  formData["firstName"] =document.getElementById("firstName").value;
  length_fn = formData["firstName"].length; 
  formData["lastName"] = document.getElementById("lastName").value;
  length_ln = formData["lastName"].length; 
  formData["email"] = document.getElementById("email").value;
  formData["gender"] = document.getElementById("gender").value;
  formData["checkBox"] = chb.value;
  return formData;
}
function insertNewRecord(data) {
  let str = data.firstName;
  let sub = data.lastName;
  const upperCase = (str) =>{
    return str.toUpperCase() ;
  }
  str = upperCase(str);
  const upperCase2 = (sub) =>{
    return sub.charAt(0).toUpperCase()+ sub.slice(1);
  }
  sub = upperCase2(sub);
  var table = document.getElementById("covidList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = str+ " " +sub;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.gender;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.checkBox;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = '<button  onClick="onEdit(this)">Edit</button>'
  var cell6 = newRow.insertCell(5);
  cell6.innerHTML = '<button onClick="onDelete(this)">Delete</button>'
}
function resetForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = ""; 
  document.getElementById("gender").value = "";
  chb.value = "No";
  selectedRow = null;
}

function onEdit(td) {
  let chek = document.getElementById("checkBox"); 
  if(chek.checked == true) {
    chek.checked = true;
  } else {
    chek.checked = false;
  }
   time = document.getElementById("faith");
   time.value = "Update";
  selectedRow = td.parentElement.parentElement; 
  LASTname_length=length_fn+1; 
  let NAME = selectedRow.cells[0].innerHTML;
  document.getElementById("firstName").value = NAME.substr(0,length_fn).toLowerCase();
  document.getElementById("lastName").value = NAME.substr(LASTname_length,length_ln).toLowerCase();
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[2].innerHTML;
  chb.value= selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  time = document.getElementById("faith");
  time.value = "Submit";
  let debby = formData.firstName;
  let upc = formData.lastName;
  const upperCase = (debby) => {
    return debby.toUpperCase();
  }
  debby = upperCase(debby);
  const upperCase2 = (upc) =>{
    return upc.charAt(0).toUpperCase() + upc.slice(1);
  }
  upc = upperCase2(upc);
  selectedRow.cells[0].innerHTML = debby +' '+  upc;   
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.gender;
  selectedRow.cells[3].innerHTML = formData.checkBox;
}

function onDelete(td) {

  row = td.parentElement.parentElement;
  document.getElementById("covidList").deleteRow(row.rowIndex);
  resetForm();

}

var chb = document.getElementById("checkBox");
chb.addEventListener("change", function (e) {
  if (chb.checked == false) {
    chb.value = "No";
  }  else  {
    chb.value = "Yes";
  }

});

function displayCovidList() {
  if(document.getElementById('submit').onsubmit) {
    document.getElementById('hide').style.display='block';
  }else {
    document.getElementById('hide').style.display='none';
  }
}

function clearCb() {
  let input = document.getElementById('checkBox');
  if(document.getElementById('submit').onsubmit) {
    input.checked = false;
  }
};





  
