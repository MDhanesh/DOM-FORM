///////
//////
let container = document.createElement("div");
container.setAttribute("class", "container py-3 ");
document.body.append(container);
//heading
let h1 = document.createElement("h1");
h1.setAttribute("id", "title");
h1.innerHTML = "Form Submission:<hr>";
container.append(h1);
let p = document.createElement("p");
p.setAttribute("id", "description");
p.innerHTML = "DOM Manipulation FORM";
container.append(p);
//form section
let form = document.createElement("form");
form.setAttribute("id", "form");
container.append(form);
///
///
// Name section
let div = document.createElement("div");
div.setAttribute("class", "field");
div.innerHTML = `<label class=" fw-bold">Name:</label>
<div class="name">
  <div class="p-2 ">
    <input type="text"class="wide" name="first-name" id="first-name" placeholder="First Name">
  </div>
  <div class="p-2">
    <input type="text" class="wide" name="last-name" placeholder="Last Name">
    </div>
    </div>`;
form.append(div);
////
////
// address section
let div1 = document.createElement("div");
div1.setAttribute("class", "field");
div1.innerHTML = ` <label class=" fw-bold">Address:</label>
<div class="address">
<div class="p-2">
  <textarea type="text" class="wide" name="address" placeholder="Street Address"></textarea>
</div>
<div class="p-2">
  <input type="text" class="wide" name="state" placeholder="State">
</div>
<div class="p-2">
  <input type="text" class="wide" name="country" placeholder="Country">
</div>
<div class="p-2">
  <input type="number" class="wide"  id="pincode" name="address-2" placeholder="Pincode">
  </div>
  </div>`;
form.append(div1);
///
//gender
let div3 = document.createElement("div");
div3.setAttribute("class", "field");
div3.innerHTML = `<label for="Gender" class=" fw-bold">Gender:</label>
<div class="pb-3">
  <div class=" checkbox">
    <input type="radio" name="Gender"  class="pointer" value="Male" checked="">
    <label>Male</label>
  </div>
  <div class=" checkbox">
    <input type="radio" name="Gender"  class="pointer" value="Female" checked="">
    <label>Female</label>
  </div>
  <div class=" checkbox">
    <input type="radio" name="Gender" class="pointer" value="Others" checked="">
    <label>Other</label>
  </div>
  </div>`;
form.append(div3);
//
//food
let div4 = document.createElement("div");
div4.setAttribute("class", "field");
div4.innerHTML = `
<label for="food" ><span class=" fw-bold">Choice of food:</span>(Must Select 2 out of 5)</label>
<div class="pb-3">
<div class="field p-2 ">
<input type="checkbox" name="food"  class="pointer" value="South Indian">
<label>South Indian</label>
</div>
<div class="field p-2">
<input type="checkbox" name="food"  class="pointer" value="North Indian">
<label>North Indian</label>
</div>
<div class="field p-2">
<input type="checkbox" name="food"  class="pointer" value="Chinese">
<label>Chinese</label>
</div>
<div class="field p-2">
<input type="checkbox" name="food"  class="pointer" value="Italian">
<label>Italian</label>
</div>
<div class="field p-2">
<input type="checkbox" name="food"  class="pointer" value="Continental">
<label>Continental</label>
</div>
</div>`;
form.append(div4);
//
//buttton
let button = document.createElement("button");
button.setAttribute("class", "btn btn-primary rounded w-25");
button.setAttribute("type", "button");
button.setAttribute("id", "submit");
button.textContent = `Submit`;
form.append(button);
//
///////////////////////////////////////////////////////////////
//
//data store section
let div5 = document.createElement("div");
div5.setAttribute("class", "container p-5");
div5.innerHTML = `<h4 class="p-2">Temporary Database:</h4>`;
document.body.append(div5);
//
let table = document.createElement("table");
table.setAttribute("class", "table");
table.innerHTML = `
<thead>
<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Address</th>
<th>Pin code</th>
<th>State</th>
<th>Country</th>
<th>Gender</th>
<th>Food</th>
</tr>
</thead>`;
div5.append(table);
//
let tbody = document.createElement("tbody");
table.append(tbody);
//

//
let result = document.getElementById("form");
let btn = document.getElementById("submit");
let gender = document.getElementsByName("Gender");
let food = document.getElementsByName("food");
btn.addEventListener("click", data);
function data() {
  let gendervalue = [];
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      gendervalue.push(gender[i].value);
      gender[i].checked = false;
      //console.log(gendervalue);
    }
  }
  let foodvalue = [];
  for (let i = 0; i < food.length; i++) {
    if (food[i].checked) {
      foodvalue.push(food[i].value);
      food[i].checked = false;
    }
    //console.log(foodvalue);
  }
  if (foodvalue.length < 2) {
    alert("Please select atleast two food");
    return;
  }
  let tr = document.createElement("tr");

  tbody.append(tr);
  tr.innerHTML = `
  <td data-label="First Name">${result.elements[0].value}</td>
  <td data-label="Last Name">${result.elements[1].value}</td>
      <td data-label="Address">${result.elements[2].value}</td>
      <td data-label="Pin code">${result.elements[3].value}</td>
      <td data-label="State">${result.elements[4].value}</td>
      <td data-label="Country">${result.elements[5].value}</td>
      <td data-label="Gender">${gendervalue[0]}</td>
      <td data-label="Food">${foodvalue.join(" , ")}</td>
`;
}
// console.log(result.elements[0]);
// console.log(result.elements[1]);
// console.log(result.elements[2]);
// console.log(result.elements[3]);
// console.log(result.elements[4]);
// console.log(result.elements[5]);
// console.log(result.elements[6]);
