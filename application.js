const form=document.getElementById("application");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.width = "100vw"

const header=document.createElement("h1");
header.innerText="Ажлын анкет";
header.style.margin = "0px auto";
form.appendChild(header);

const container=document.createElement("div");
container.id = "firsname";
container.style.width = "50%"
form.appendChild(container);
const firsname1 = document.createElement("p");
firsname1.innerText = "Нэр:";
firsname1.style.margin ="10px 0px 0px 0px"
const firsnameInput = document.createElement("input");
firsnameInput.type="text";
let warning = document.createElement("p");
warning.innerText = "1-ээс их урттай байна"
warning.style.color="red";
warning.style.margin = "10px 0px 0px 40px"
warning.style.visibility = "hidden";

container.appendChild(firsname1)
container.appendChild(firsnameInput);
container.appendChild(warning);

const containerLast=document.createElement("div");
containerLast.id = "lastname";
containerLast.style.width = "50%"
form.appendChild(containerLast);
const lastname1 = document.createElement("p");
lastname1.innerText = "Овог:";
lastname1.style.margin ="10px 0px 0px 0px"
const lastnameInput = document.createElement("input");
lastnameInput.type="text";
warning = document.createElement("p");
warning.innerText = "1-ээс их урттай байна"
warning.style.color="red";
warning.style.margin = "10px 0px 0px 40px"
warning.style.visibility = "hidden";

containerLast.appendChild(lastname1)
containerLast.appendChild(lastnameInput);
containerLast.appendChild(warning);

const containerAge=document.createElement("div");
containerAge.id = "age";
containerAge.style.width = "50%"
form.appendChild(containerAge);
const age1 = document.createElement("p");
age1.innerText = "Нас:";
age1.style.margin ="10px 0px 0px 0px"
const ageInput = document.createElement("input");
ageInput.type="number";
warning = document.createElement("p");
warning.innerText = "Насаа зөв оруулна уу!"
warning.style.color="red";
warning.style.margin = "10px 0px 0px 40px"
warning.style.visibility = "hidden";

containerAge.appendChild(age1)
containerAge.appendChild(ageInput);
containerAge.appendChild(warning);

const containerBirthday=document.createElement("div");
containerBirthday.id = "birthday";
containerBirthday.style.width = "50%"
form.appendChild(containerBirthday);
const birthday1 = document.createElement("p");
birthday1.innerText = "Төрсөн он сар:";
birthday1.style.margin ="10px 0px 0px 0px"
const birthdayInput = document.createElement("input");
birthdayInput.type="date";
warning = document.createElement("p");
warning.innerText = "Төрсөн он сараа зөв оруулна уу!"
warning.style.color="red";
warning.style.margin = "10px 0px 0px 40px"
warning.style.visibility = "hidden";

containerBirthday.appendChild(birthday1)
containerBirthday.appendChild(birthdayInput);
containerBirthday.appendChild(warning);

const containerGender=document.createElement("div");
containerGender.id = "gender";
containerGender.style.width = "50%"
form.appendChild(containerGender);
const gender1 = document.createElement("p");
gender1.innerText = "Хүйс:";
gender1.style.margin ="10px 0px 0px 0px"
containerGender.appendChild(gender1)
const genders=["male" , "female","others"]
genders.forEach(gender=>{
    const label = document.createElement("label");
    label.style.margin= "5px 10px"
    const genderInput = document.createElement("input")
    genderInput.type="radio";
    genderInput.name="gender";
    genderInput.value=gender;
    label.appendChild(genderInput);
    label.innerText=gender
    
    containerGender.appendChild(label);
})

warning = document.createElement("p");
warning.innerText = "Хүйсийн мэдээллээ оруулна уу!"
warning.style.color="red";
warning.style.margin = "10px 0px 0px 40px"
warning.style.visibility = "hidden";
containerGender.appendChild(warning);

const containerRelation=document.createElement("div");
containerRelation.id = "relationshipStatus";
containerRelation.style.width = "50%"
form.appendChild(containerRelation);
const relation1 = document.createElement("p");
relation1.innerText = "Гэр бүлийн байдал:";
relation1.style.margin ="10px 0px 0px 0px"
containerRelation.appendChild(relation1)
const relationships=["married" , "single","others"]
relationships.forEach(relation=>{
    const label = document.createElement("label");
    label.style.margin= "5px 10px"
    const relationInput = document.createElement("input")
    relationInput.type="radio";
    relationInput.name="relation";
    relationInput.value=relation;
    label.appendChild(relationInput);
    label.innerText=relation
    
    containerRelation.appendChild(label);
})

warning = document.createElement("p");
warning.innerText = "Хүйсийн мэдээллээ оруулна уу!"
warning.style.color="red";
warning.style.margin = "10px 0px 0px 40px"
warning.style.visibility = "hidden";
containerRelation.appendChild(warning);

const containerUsername=document.createElement("div");
containerUsername.id = "username";
containerUsername.style.width = "50%"
form.appendChild(containerUsername);
const username1 = document.createElement("p");
username1.innerText = "Хэрэглэгчийн нэр:";
username1.style.margin ="10px 0px 0px 0px"
const usernameInput = document.createElement("input");
usernameInput.type="text";
warning = document.createElement("p");
warning.innerText = "Үсэг тоо ашигласан байна"
warning.style.color="red";
warning.style.margin = "10px 0px 0px 40px"
warning.style.visibility = "hidden";

const containerPassword=document.createElement("div");
containerPassword.id = "password";
containerPassword.style.width = "50%"
form.appendChild(containerPassword);
const password1 = document.createElement("p");
password1.innerText = "Нууц үг:";
password1.style.margin ="10px 0px 0px 0px"
const passInput = document.createElement("password");
passInput.type="password";
warning = document.createElement("p");
warning.innerText = "8-ээс их урттай байна"
warning.style.color="red";
warning.style.margin = "10px 0px 0px 40px"
warning.style.visibility = "hidden";