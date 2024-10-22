
const date = new  Date();
const hour = date.getHour;

commoditer = document.querySelector("h1")

if (hour > 6 && hour < 20){
    commoditer.textContent = "Bonjour";
}else{
    commoditer.textContent = "Bonsoir";
}