const form=document.getElementById("application");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.width = "100vw"

const header=document.createElement("h1");
header.innerText="Ажлын анкет";
header.style.margin = "0px auto";
form.appendChild(header);
function creator(contId, texts, inputType, warnings) {
    const container = document.createElement("div");
    container.id = contId;
    container.style.width = "50%";
    form.appendChild(container);

    const InputName = document.createElement("p");
    InputName.innerText = texts;
    InputName.style.margin = "10px 0px 0px 0px";

    const input = document.createElement("input");
    input.type = inputType;

    const warning = document.createElement("p");
    warning.innerText = warnings;
    warning.style.color = "red";
    warning.style.margin = "10px 0px 0px 40px";
    warning.style.visibility = "hidden";

    container.appendChild(InputName);
    container.appendChild(input);
    container.appendChild(warning);

    return { input, warning }; // Return both input and warning elements
}

// Create form fields
const firstname = creator("firstname", "Нэр:", "text", "1-ээс их урттай байна");
const lastname = creator("lastname", "Овог:", "text", "1-ээс их урттай байна");
const age = creator("age", "Нас:", "number", "Насаа зөв оруулна уу!");
const birthday = creator("birthday", "Төрсөн он сар:", "date", "Төрсөн он сараа зөв оруулна уу!");

// Gender section
const containerGender = document.createElement("div");
containerGender.id = "gender";
containerGender.style.width = "50%";
form.appendChild(containerGender);
const gender1 = document.createElement("p");
gender1.innerText = "Хүйс:";
gender1.style.margin = "10px 0px 0px 0px";
containerGender.appendChild(gender1);

const genders = ["male", "female", "others"];
genders.forEach(gender => {
    const label = document.createElement("label");
    label.style.margin = "5px 10px";
    const genderInput = document.createElement("input");
    genderInput.type = "radio";
    genderInput.name = "gender";
    genderInput.value = gender;
    label.appendChild(genderInput);
    label.innerText = gender;

    containerGender.appendChild(label);
});

const genderWarning = document.createElement("p");
genderWarning.innerText = "Хүйсийн мэдээллээ оруулна уу!";
genderWarning.style.color = "red";
genderWarning.style.margin = "10px 0px 0px 40px";
genderWarning.style.visibility = "hidden";
containerGender.appendChild(genderWarning);

// Relationship section
const containerRelation = document.createElement("div");
containerRelation.id = "relationshipStatus";
containerRelation.style.width = "50%";
form.appendChild(containerRelation);

const relation1 = document.createElement("p");
relation1.innerText = "Гэр бүлийн байдал:";
relation1.style.margin = "10px 0px 0px 0px";
containerRelation.appendChild(relation1);

const relationships = ["married", "single", "others"];
relationships.forEach(relation => {
    const label = document.createElement("label");
    label.style.margin = "5px 10px";
    const relationInput = document.createElement("input");
    relationInput.type = "radio";
    relationInput.name = "relation";
    relationInput.value = relation;
    label.appendChild(relationInput);
    label.innerText = relation;
    containerRelation.appendChild(label);
});

const relationWarning = document.createElement("p");
relationWarning.innerText = "Гэр бүлийн байдал оруулна уу!";
relationWarning.style.color = "red";
relationWarning.style.margin = "10px 0px 0px 40px";
relationWarning.style.visibility = "hidden";
containerRelation.appendChild(relationWarning);

// Create username and password fields
const username = creator("username", "Хэрэглэгчийн нэр:", "text", "Үсэг тоо ашигласан байна");
const password = creator("password", "Нууц үг:", "password", "Үсэг тоо ашигласан байна");

// Submit button
const button = document.createElement("button");
button.innerText = "submit";
button.style.borderRadius = "5px";
form.appendChild(button);

button.addEventListener(("click"),function(event){
    console.log(firstname.input.value);
    
    check()
})
function check(){
    if(firstname.input.length>=2){
        firstname.warning.style.visibility = "hidden"
    }
    else firstname.warning.style.visibility = "visible"
}