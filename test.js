var length_fn;
var length_ln;
var length_sub;
var time;
var chek;
var ccb;
var details;
var details2;

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
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["email"] = document.getElementById("email").value;
  formData["gender"] = document.getElementById("gee").value;
  formData["checkBox"] = chb.value;
  return formData;
}

function insertNewRecord(data) {  
  var table = document.getElementById("covidList").getElementsByTagName('tbody')[0];
  let ccb = data.checkBox;
  let str = data.firstName;
  length_fn= data.firstName;
  let sub = data.lastName;
  length_ln = data.lastName;
  let fullNames = str + " " + sub;
  console.log("mee", fullNames);
  const upperCase = (str) => {
    return str.toUpperCase();
  }
  str = upperCase(str);
  const upperCase2 = (sub) => {
    return sub.charAt(0).toUpperCase() + sub.slice(1);
  }
  sub = upperCase2(sub);
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = str +  " " + sub;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.gender;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = ccb;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = '<button  onClick="onEdit(this)">Edit</button>'
  var cell6 = newRow.insertCell(5);
  cell6.innerHTML = '<button onClick="onDelete(this)">Delete</button>'
}

function resetForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gee").value = "";
  chb.value = "No";
  selectedRow = null;
}

var rah = document.getElementById("firstName");
var bah = document.getElementById("lastName");
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  time = document.getElementById("faith");
  time.value = "Update";
  let dem =length_fn;
  let fem = length_ln;
  console.log("she",dem);
  let fullName2 = fem+ " " +dem;
  console.log("vee",fullName2)
  let details2 = fullName2.split(" ",1);
 console.log("ere", details)
 let NAME = selectedRow.cells[0].innerHTML;
 console.log("ee",NAME)
 const lowerCase = (NAME) => {
   return NAME.toLowerCase();
 }
  NAME = lowerCase(NAME);
  let name = NAME.split(" ",1);
  let fame = selectedRow.cells[0].innerHTML;
  const lowerCase2 = (fame) => {
    return fame.toLowerCase();
  }
    fame = lowerCase2(fame);
  let dame = fame.split(" ").splice(-1);
  console.log("rrrr", name)
 value = details;
 console.log("kee",value)
 console.log("xx", value);
 console.log("go", details2);
  rah.value = name;
  bah.value = dame;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("gee").value = selectedRow.cells[2].innerHTML;
  chb.value = selectedRow.cells[3].innerHTML;
  if (chb.value == "Yes") {
    chb.checked = true;
  } else {
    chb.checked = false;
  }
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
  const upperCase2 = (upc) => {
    return upc.charAt(0).toUpperCase() + upc.slice(1);
  }
  upc = upperCase2(upc);
  selectedRow.cells[0].innerHTML = debby + ' ' + upc;
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
  } else {
    chb.value = "Yes";
  }
});

function displayCovidList() {
  if (document.getElementById('submit').onsubmit) {
    document.getElementById('hide').style.display = 'block';
  } else {
    document.getElementById('hide').style.display = 'none';
  }
}

function clearCb() {
  let input = document.getElementById('checkBox');
  if (document.getElementById('submit').onsubmit) {
    input.checked = false;
  }
};
98/9999999999999