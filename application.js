const body=document.body
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

const header=document.createElement("h3");
header.innerText="Ажлын анкет";
body.appendChild(header);

const form=document.getElementById("application");
const container=document.createElement("div");
