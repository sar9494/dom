const form=document.getElementById("application");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.width = "100vw"

const header=document.createElement("h1");
header.innerText="Ажлын анкет";
header.style.margin = "0px auto";
form.appendChild(header);
function creator(contId,texts,inputType,warnings){
    const container=document.createElement("div");
    container.id = contId;
    container.style.width = "50%"
    form.appendChild(container);
    const InputName = document.createElement("p");
    InputName.innerText = texts;
    InputName.style.margin ="10px 0px 0px 0px"
    const input = document.createElement("input");
    input.type=inputType;
    const warning = document.createElement("p");
    warning.innerText = warnings
    warning.style.color="red";
    warning.style.margin = "10px 0px 0px 40px"
    warning.style.visibility = "hidden";
    
    container.appendChild(InputName)
    container.appendChild(input);
    container.appendChild(warning);
}

const containerIdFirstname= "firsname";
const firsnameText = "Нэр:";
const firsnameInputType="text";
const warningFirst = "1-ээс их урттай байна"
creator(containerIdFirstname,firsnameText,firsnameInputType,warningFirst)

const containerIdLastname= "lastname";
const lastnameText = "Овог:";
const lastnameInputType="text";
const warningLast = "1-ээс их урттай байна"
creator(containerIdLastname,lastnameText,lastnameInputType,warningLast)

const containerIdAge= "age";
const ageText = "Нас:";
const ageInputType="number";
const warningAge = "Насаа зөв оруулна уу!"
creator(containerIdAge,ageText,ageInputType,warningAge)

const containerIdBirthday= "birthday";
const birthdayText = "Төрсөн он сар:";
const birthdayInputType="date";
const warningBirthday = "Төрсөн он сараа зөв оруулна уу!"
creator(containerIdBirthday,birthdayText,birthdayInputType,warningBirthday)


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

const containerIdUsername= "username";
const usernameText = "Хэрэглэгчийн нэр:";
const usernameInputType="text";
const warningUsername = "Үсэг тоо ашигласан байна"
creator(containerIdUsername,usernameText,usernameInputType,warningUsername)

const containerIdPassword= "password";
const passwordText = "Нууц үг:";
const passwordInputType="password";
const warningPassword = "Үсэг тоо ашигласан байна"
creator(containerIdPassword,passwordText,passwordInputType,warningPassword)

const button = document.createElement("button");
button.innerText="submit";
button.style.borderRadius = "5px"
form.appendChild(button);

function check(input,warning){
    if(input.value.length>=2){
        warning.style.visibility = "hidden"
    }
    else warning.style.visibility = "visible"
}