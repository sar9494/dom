const container = document.getElementById("game-container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";

const logIn = document.createElement("h1");
logIn.innerHTML = "LOG IN";

const emailName = document.createElement("p");
emailName.innerHTML = "Email Address";
emailName.style.margin = " 0 0 0 -50px";

const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.style.borderRadius = "5px";
emailInput.style.height = "20px";

const passName = document.createElement("p");
passName.innerHTML = "Enter Password";
passName.style.margin = " 30px 0 0 -45px";

const password = document.createElement("input");
password.setAttribute("type", "password");
password.style.borderRadius = "5px";
password.style.height = "20px";

const button = document.createElement("button");
button.setAttribute("type", "button");
button.style.margin = "15px";
button.innerText = "Submit";
button.addEventListener("click", checkEmail);
console.log(emailInput.value);
function checkEmail() {
    if (emailInput.value.includes("@")) {
        if (password.value.length >= 8) {
            
        }
    } else alert("wrong email");
}

container.appendChild(logIn);
container.appendChild(emailName);
container.appendChild(emailInput);
container.appendChild(passName);
container.appendChild(password);
container.appendChild(button);
