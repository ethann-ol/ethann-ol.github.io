
function create(tag, container, text=null){
    let element = document.createElement(tag)
    if (text)
        element.innerText = text
    container.appendChild(element)
    return element
}
const date = new  Date();
let hour = date.getHours();

commoditer = document.querySelector("h1")

if (hour > 6 && hour < 18){
    commoditer.textContent = "Bonjour, goodMorning";
}
else
{
    commoditer.textContent = "Bonsoir, goodEvening";
}








