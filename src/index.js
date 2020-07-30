import "./style.css";
import addLoader from "./loader.js"

let elem = document.createElement('div')
elem.className = "title"
elem.innerText = "React Course -- Task #2"

document.body.appendChild(elem)

addLoader();