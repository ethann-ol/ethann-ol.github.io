
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

if (hour <= 6 || hour > 20 ) {
    commoditer.textContent = "You don't have to be there at this time !!!";
}
else if (hour > 6 && hour < 12)
{
    commoditer.textContent = "Bonjour / GoodMorning !";
}
else if (hour >= 12 && hour < 18)
{
    commoditer.textContent = "Bon après-midi, GoodAfternoon !";
}
else
{
    commoditer.textContent = "Bonsoir, GoodEvening !";
}

const sidebarToggleBtn = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});
