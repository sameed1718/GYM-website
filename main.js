function calculateBmi() {
  var weight = document.bmiForm.weight.value
  var height = document.bmiForm.height.value
  if (weight > 0 && height > 0) {
    var BMI = weight / (height / 100 * height / 100)
    document.bmiForm.bmi.value = Math.floor(BMI);
    if (BMI < 18.5) {
      document.bmiForm.result.value = "That you are too thin."
    }
    if (BMI > 18.5 && BMI < 25) {
      document.bmiForm.result.value = "That you are healthy."
    }
    if (BMI > 25) {
      document.bmiForm.result.value = "That you have overweight."
    }
  }
  else {
    alert("Please Fill in everything correctly")
  }
}


function addMember() {
  var srno = document.myform.srno.value;
  var name = document.myform.name.value;
  var date = document.myform.date.value;
  var membership = document.myform.membership.value;
  //with the concept of dom manipulation we created an element'tr'
  var tr = document.createElement('tr');
  //append means we have to put something inside it
  //here it means we are adding table rows and inside it we are creating td (table data)
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));

  td1.innerHTML = srno;
  td2.innerHTML = name;
  td3.innerHTML = date;
  td4.innerHTML = membership;
  td5.innerHTML = '<input type="button" name="del" value="Delete" onclick="delMember(this);" class="delete">'


  document.getElementById("tbl").appendChild(tr);
}

function delMember(member) {
  var del = member.parentNode.parentNode;
  del.parentNode.removeChild(del);
}
