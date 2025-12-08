<script setup>
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
    <div class="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div class="absolute top-40 right-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

    <div class="relative z-10">
      <header class="pt-12 pb-8 max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h1 class="text-4xl font-bold text-white mb-2">Mes Compétences</h1>
        <p class="text-indigo-300 text-lg mb-4">Compétences acquises durant le BUT Informatique — Parcours A (Semestre 5)</p>
        <!-- Lien de retour retiré, navigation globale dans le header -->
      </header>

      <main class="max-w-6xl mx-auto px-6 py-12">
        <!-- Section Compétences organisée par UE (référentiel PN) -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-12 text-center">Compétences (UE - Référentiel PN)</h2>

          <p class="text-slate-300 text-center mb-8">J'ai organisé les compétences en 6 UE (Unités d'Enseignement) — chaque carte contient le(s) niveau(x) et les compétences associées. Je peux remplacer les placeholders par les intitulés exacts et les compétences issues du PDF si vous le souhaitez.</p>

          <div class="grid grid-cols-1 gap-6">
            <!-- UE 1 - Réaliser -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-6 border border-indigo-500/30">
              <h3 class="text-2xl font-extrabold text-indigo-200 mb-2">Réaliser — Conception & développement</h3>
              <p class="text-slate-300 text-sm mb-2">Concevoir, coder, tester et intégrer une solution informatique.</p>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 1 : Développer des applications informatiques simples</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC11.01 : Implémenter des conceptions simples</li>
                <li>• AC11.02 : Élaborer des conceptions simples</li>
                <li>• AC11.03 : Faire des essais et évaluer leurs résultats en regard des spécifications</li>
                <li>• AC11.04 : Développer des interfaces utilisateurs</li>
              </ul>
            </div>

            <!-- UE 2 - Optimiser -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-6 border border-indigo-500/30">
              <h3 class="text-2xl font-extrabold text-indigo-200 mb-2">Optimiser — Performance & efficience</h3>
              <p class="text-slate-300 text-sm mb-2">Optimiser le temps d'exécution et la consommation de ressources.</p>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 1 : Appréhender et construire des algorithmes</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC12.01 : Analyser un problème avec méthode (découpage, structure de données...)</li>
                <li>• AC12.02 : Comparer des algorithmes pour des problèmes classiques</li>
                <li>• AC12.03 : Formaliser et mettre en œuvre des outils mathématiques pour l'informatique</li>
              </ul>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 2 : Sélectionner les algorithmes adéquats pour répondre à un problème donné</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC22.01 : Choisir des structures de données complexes adaptées au problème</li>
                <li>• AC22.02 : Utiliser des techniques algorithmiques adaptées pour des problèmes complexes</li>
                <li>• AC22.03 : Comprendre les enjeux et moyens de sécurisation des données et du code</li>
                <li>• AC22.04 : Évaluer l'impact environnemental et sociétal des solutions proposées</li>
              </ul>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 3 : Analyser et optimiser des applications</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC32.01 : Anticiper les résultats de diverses métriques</li>
                <li>• AC32.02 : Profiler, analyser et justifier le comportement d'un code existant</li>
                <li>• AC32.03 : Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application</li>
              </ul>
            </div>

            <!-- UE 3 - Administrer -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-6 border border-indigo-500/30">
              <h3 class="text-2xl font-extrabold text-indigo-200 mb-2">Administrer — Infrastructures & services</h3>
              <p class="text-slate-300 text-sm mb-2">Installer, configurer et maintenir infrastructures, services et réseaux.</p>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 1 : Installer et configurer un poste de travail</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC13.01 : Identifier les différents composants d’un système numérique</li>
                <li>• AC13.02 : Utiliser les fonctionnalités de base d’un système multiutilisateurs</li>
                <li>• AC13.03 : Installer et configurer un système d’exploitation et des outils de développement</li>
                <li>• AC13.04 : Configurer un poste de travail dans un réseau d’entreprise</li>
              </ul>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 2 : Déployer des services dans une architecture réseau</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC23.01 : Concevoir et développer des applications communicantes</li>
                <li>• AC23.02 : Utiliser des serveurs et des services réseaux virtualisés</li>
                <li>• AC23.03 : Sécuriser les services et données d’un système</li>
              </ul>
            </div>

            <!-- UE 4 - Gérer -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-6 border border-indigo-500/30">
              <h3 class="text-2xl font-extrabold text-indigo-200 mb-2">Gérer — Données & pilotage</h3>
              <p class="text-slate-300 text-sm mb-2">Concevoir et exploiter les données pour le pilotage de l'entreprise.</p>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 1 : Concevoir et mettre en place une base de données à partir d’un cahier des charges client</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC14.01 : Mettre à jour et interroger une base de données relationnelle</li>
                <li>• AC14.02 : Visualiser des données</li>
                <li>• AC14.03 : Concevoir une base de données relationnelle à partir d’un cahier des charges</li>
              </ul>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 2 : Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC24.01 : Optimiser les modèles de données de l’entreprise</li>
                <li>• AC24.02 : Assurer la sécurité des données (intégrité et confidentialité)</li>
                <li>• AC24.03 : Organiser la restitution de données à travers la programmation et la visualisation</li>
                <li>• AC24.04 : Manipuler des données hétérogènes</li>
              </ul>
            </div>

            <!-- UE 5 - Conduire -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-6 border border-indigo-500/30">
              <h3 class="text-2xl font-extrabold text-indigo-200 mb-2">Conduire — Pilotage de projet</h3>
              <p class="text-slate-300 text-sm mb-2">Organiser et piloter des projets informatiques (classiques ou agiles).</p>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 1 : Identifier les besoins métiers des clients et des utilisateurs</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC15.01 : Appréhender les besoins du client et de l'utilisateur</li>
                <li>• AC15.02 : Mettre en place les outils de gestion de projet</li>
                <li>• AC15.03 : Identifier les acteurs et les différentes phases d'un cycle de développement</li>
              </ul>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 2 : Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC25.01 : Identifier les processus présents dans une organisation pour améliorer les SI</li>
                <li>• AC25.02 : Formaliser les besoins du client et de l'utilisateur</li>
                <li>• AC25.03 : Identifier les critères de faisabilité d'un projet informatique</li>
                <li>• AC25.04 : Définir et mettre en œuvre une démarche de suivi de projet</li>
              </ul>
            </div>

            <!-- UE 6 - Collaborer -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-6 border border-indigo-500/30">
              <h3 class="text-2xl font-extrabold text-indigo-200 mb-2">Collaborer — Travail en équipe</h3>
              <p class="text-slate-300 text-sm mb-2">Acquérir et mobiliser les aptitudes pour travailler efficacement en équipe.</p>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 1 : Identifier ses aptitudes pour travailler dans une équipe</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC16.01 : Appréhender l’écosystème numérique</li>
                <li>• AC16.02 : Découvrir les aptitudes requises selon les différents secteurs informatiques</li>
                <li>• AC16.03 : Identifier les statuts, fonctions et rôles de chaque membre d’une équipe pluridisciplinaire</li>
                <li>• AC16.04 : Acquérir les compétences interpersonnelles pour travailler en équipe</li>
              </ul>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 2 : Situer son rôle et ses missions au sein d’une équipe informatique</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC26.01 : Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation</li>
                <li>• AC26.02 : Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation</li>
                <li>• AC26.03 : Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique</li>
                <li>• AC26.04 : Rendre compte de son activité professionnelle</li>
              </ul>
              <p class="text-indigo-300 text-lg mb-3 italic font-bold">Niveau 3 : Manager une équipe informatique</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li>• AC36.01 : Organiser et partager une veille technologique et informationnelle</li>
                <li>• AC36.02 : Identifier les enjeux de l’économie de l’innovation numérique</li>
                <li>• AC36.03 : Guider la conduite du changement informatique au sein d’une organisation</li>
                <li>• AC36.04 : Accompagner le management de projet informatique</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Section Preuves & Réalisations -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-8 text-center">Preuves & Réalisations</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="group">
              <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full w-40 h-40 flex items-center justify-center mx-auto mb-4 shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div class="text-center">
                  <div class="text-3xl mb-2">🏆</div>
                  <p class="text-white font-bold text-sm">Certificats</p>
                </div>
              </div>
              <p class="text-slate-300 text-center text-sm">Diplômes & certifications obtenues</p>
            </div>

            <div class="group">
              <div class="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full w-40 h-40 flex items-center justify-center mx-auto mb-4 shadow-2xl hover:shadow-indigo-600/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div class="text-center">
                  <div class="text-3xl mb-2">💾</div>
                  <p class="text-white font-bold text-sm">Projets</p>
                </div>
              </div>
              <p class="text-slate-300 text-center text-sm">Code source & démonstrations</p>
            </div>

            <div class="group">
              <div class="bg-gradient-to-br from-slate-700 to-slate-800 rounded-full w-40 h-40 flex items-center justify-center mx-auto mb-4 shadow-2xl hover:shadow-slate-600/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div class="text-center">
                  <div class="text-3xl mb-2">📊</div>
                  <p class="text-white font-bold text-sm">Évaluations</p>
                </div>
              </div>
              <p class="text-slate-300 text-center text-sm">Résultats & retours pédagogiques</p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 class="text-3xl font-bold text-white mb-8">Envie d'en voir plus ?</h2>
          <div class="flex gap-4 justify-center">
            <router-link to="/experiences" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg">Voir mes expériences</router-link>
            <router-link to="/" class="px-8 py-3 border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 font-bold rounded-full transition-all duration-300">Retour</router-link>
          </div>
        </section>

      </main>
    </div>
  </div>
</template>

<style scoped>
@keyframes blob { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
.animate-blob { animation: blob 7s infinite; }
.animation-delay-2000 { animation-delay: 2s; }
</style>
