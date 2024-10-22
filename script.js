
const date = new  Date();
let hour = date.getHours();

commoditer = document.querySelector("h1")

if (hour > 6 && hour < 18){
    commoditer.textContent = "Bonjour, goodmorning";
}
else
{
    commoditer.textContent = "Bonsoir, goodevening";
}