
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

if (hour >= 6 && hour > 20 ) {
    commoditer.textContent = "Qu'est-ce que tu fais là ???/ You don't have to be there at this time !!!";
}
else if (hour > 6 && hour < 12)
{
    commoditer.textContent = "Bonjour, GoodMorning !";
}
else if (hour >= 12 && hour < 18)
{
    commoditer.textContent = "Bon après-midi, GoodAfternoon !";
}
else
{
    commoditer.textContent = "Bonsoir, GoodEvening !";
}

function changeLanguage() {
    const language = document.getElementById('language').value;

    // Charger le fichier JSON de traductions
    fetch('translations.json')
        .then(response => response.json())
        .then(translations => {
            // Appliquer les traductions à la page
            document.title = translations[language].title; // Change le titre de la page
            document.querySelector('header h1').textContent = translations[language].header.welcome; // Change le texte d'accueil

            // Mettre à jour les projets
            const projectsSection = document.querySelector('.projets');
            projectsSection.innerHTML = ''; // Vider la section des projets

            translations[language].projects.forEach(project => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <h2>${project.title}</h2>
                    <div class="projet">
                        <p>${project.description}</p>
                    </div>
                `;
                projectsSection.appendChild(article);
            });

            // Mettre à jour le footer
            const footer = document.querySelector('footer');
            footer.querySelector('.link-redirection li a[title="github"]').textContent = translations[language].footer.github;
            footer.querySelector('.link-redirection li a[title="linkedin"]').textContent = translations[language].footer.linkedin;
        })
        .catch(error => {
            console.error('Erreur lors du chargement des traductions:', error);
        });
}






