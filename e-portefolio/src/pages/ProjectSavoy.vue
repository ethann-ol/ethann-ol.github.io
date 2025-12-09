<script setup>
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
    <div class="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div class="absolute top-40 right-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

    <div class="relative z-10">
      <header class="pt-12 pb-8 max-w-5xl mx-auto px-6">
        <p class="text-sm uppercase tracking-[0.2em] text-indigo-300/70">Stage BUT2</p>
        <h1 class="text-4xl font-bold text-white mb-3">SIDesktop 2.0 — Supervision & Reporting</h1>
        <p class="text-indigo-300 text-lg">Refonte de l'outil interne pour Savoy International (Cluses)</p>
      </header>

      <main class="max-w-5xl mx-auto px-6 py-16">
        <section class="mb-8">
          <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-2xl p-6 border border-indigo-500/30 mb-8">
            <h3 class="text-xl font-bold text-indigo-200 mb-3">Apprentissages Critiques mobilisés</h3>
            <ul class="space-y-2 text-slate-300 text-sm md:text-base">
              <li>• <span class="text-indigo-300 font-semibold">AC21.01</span> – Spécifications fonctionnelles et non fonctionnelles</li>
              <li>• <span class="text-indigo-300 font-semibold">AC21.04</span> – Tests & validation</li>
              <li>• <span class="text-indigo-300 font-semibold">AC22.03</span> – Sécurisation des données et du code</li>
              <li>• <span class="text-indigo-300 font-semibold">AC31.02</span> – Faire évoluer une application existante</li>
            </ul>
          </div>

          <div class="flex flex-wrap gap-4 md:gap-6 text-slate-300 mb-6">
            <span class="px-3 py-2 bg-slate-800/50 rounded-lg border border-indigo-500/20 flex items-center gap-2"><span class="text-lg">🏢</span> Entreprise : Savoy International (rang 1 industriel)</span>
            <span class="px-3 py-2 bg-slate-800/50 rounded-lg border border-indigo-500/20 flex items-center gap-2"><span class="text-lg">⏱️</span> Durée : 3 mois</span>
            <span class="px-3 py-2 bg-slate-800/50 rounded-lg border border-indigo-500/20 flex items-center gap-2"><span class="text-lg">📋</span> Mission : Refonte SIDesktop (supervision & reporting)</span>
            <span class="px-3 py-2 bg-slate-800/50 rounded-lg border border-indigo-500/20 flex items-center gap-2"><span class="text-lg">🚀</span> Méthode : Agile (sprints hebdo)</span>
          </div>
        </section>

        <section class="mb-16">
          <h3 class="text-3xl font-bold text-white mb-4 pb-3 border-b border-indigo-500/30">Partie 1 : Contexte & Besoin</h3>
          <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-2xl p-6 border border-indigo-500/30 space-y-4 text-slate-300">
            <p><strong class="text-indigo-300">Objectif</strong> : refondre SIDesktop 1.0 en application web unique qui supervise les indicateurs métier et agit de manière proactive (auto-corrections, notifications, reporting).</p>
            <p><strong class="text-indigo-300">Problèmes de l'existant</strong> : ergonomie lourde (multiples fenêtres), déploiement client lourd, navigation difficile, absence de proactivité.</p>
            <p><strong class="text-indigo-300">Cible</strong> : comptables, contrôleurs de gestion, paie, logistique, commerce, qualité, achats/appro, production, ateliers.</p>
          </div>

          <div class="mt-6">
            <p class="text-slate-400 text-sm mb-2">📸 Logo entreprise</p>
            <div class="bg-slate-800/50 rounded-lg border border-indigo-500/30 overflow-hidden shadow-lg flex items-center justify-center h-40">
              <img src="@/assets/projects/savoy/logo.png" alt="Logo Savoy International" class="h-full w-auto object-contain" loading="lazy" />
            </div>
          </div>
        </section>

        <section class="mb-16">
          <h3 class="text-3xl font-bold text-white mb-4 pb-3 border-b border-indigo-500/30">Partie 2 : Architecture & Technologies</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h4 class="text-indigo-300 font-bold text-lg mb-3">⚙️ Architecture logicielle (MVC)</h4>
              <ul class="text-slate-300 space-y-2 text-sm">
                <li>• API .NET (C#, Entity Framework) pour indicateurs et actions</li>
                <li>• Front Vue.js (SPA) pour consultation et administration</li>
                <li>• Séparation API / client pour déploiements indépendants</li>
                <li>• Tests unitaires API + tests unitaires & end-to-end front</li>
              </ul>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h4 class="text-indigo-300 font-bold text-lg mb-3">🗄️ Architecture matérielle</h4>
              <ul class="text-slate-300 space-y-2 text-sm">
                <li>• Serveur Windows pour héberger API + client</li>
                <li>• Base DB2 (ERP IBM) comme source métier</li>
                <li>• Base SQL Server support (droits, tâches, mails, indicateurs)</li>
                <li>• PCA / PRA validés pour continuité de service</li>
              </ul>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h4 class="text-indigo-300 font-bold text-lg mb-3">🛠️ Stack & outils</h4>
              <ul class="text-slate-300 space-y-2 text-sm">
                <li>• C#, .NET, Entity Framework</li>
                <li>• Vue.js, HTML/CSS, stores pour cache</li>
                <li>• SQL Server (support) + DB2 (ERP)</li>
                <li>• Visual Studio / VS Code, GitHub, Office 365</li>
              </ul>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h4 class="text-indigo-300 font-bold text-lg mb-3">🧪 Qualité & tests</h4>
              <ul class="text-slate-300 space-y-2 text-sm">
                <li>• Projet de tests unitaires pour l'API</li>
                <li>• Tests unitaires & end-to-end côté web</li>
                <li>• Vérification préproduction</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="mb-16">
          <h3 class="text-3xl font-bold text-white mb-4 pb-3 border-b border-indigo-500/30">Partie 3 : Réalisations clés</h3>
          <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-2xl p-6 border border-indigo-500/30">
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
              <li class="flex gap-3 items-start"><span class="text-indigo-400">▸</span><span>Refonte ergonomique : passage multi-fenêtres → SPA à onglets (domaines / sociétés).</span></li>
              <li class="flex gap-3 items-start"><span class="text-indigo-400">▸</span><span>API .NET + EF découplée du front, accessible navigateur interne.</span></li>
              <li class="flex gap-3 items-start"><span class="text-indigo-400">▸</span><span>Gestion fine des droits (utilisateurs, domaines, sociétés, tâches/indicateurs) et notifications e-mail.</span></li>
              <li class="flex gap-3 items-start"><span class="text-indigo-400">▸</span><span>Supervision proactive : récupération périodique, auto-corrections quand possibles, escalade mail en cas d'échec.</span></li>
              <li class="flex gap-3 items-start"><span class="text-indigo-400">▸</span><span>Tests (unitaires + e2e) pour limiter les régressions avant préproduction.</span></li>
            </ul>
          </div>
        </section>

        <section class="mb-16">
          <h3 class="text-3xl font-bold text-white mb-4 pb-3 border-b border-indigo-500/30">Partie 4 : Organisation & Méthode</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h4 class="text-indigo-300 font-bold text-lg mb-3">🚀 Méthodologie</h4>
              <p class="text-slate-300 text-sm leading-relaxed">Agile en sprints hebdomadaires avec revue le jeudi : priorisation courte, ajustements rapides avec le maître de stage.</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h4 class="text-indigo-300 font-bold text-lg mb-3">🤝 Collaboration & outils</h4>
              <ul class="text-slate-300 space-y-2 text-sm">
                <li>• GitHub pour versioning et revues</li>
                <li>• Office 365 pour suivi/communication</li>
                <li>• Réunions hebdo pour arbitrer et valider</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="mb-12">
          <h3 class="text-3xl font-bold text-white mb-4 pb-3 border-b border-indigo-500/30">Partie 5 : Compétences mobilisées</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <div class="flex items-center gap-3 mb-3"><span class="text-2xl">⚙️</span><h4 class="text-indigo-300 font-bold text-lg">UE Réaliser</h4></div>
              <ul class="text-slate-300 text-sm space-y-2">
                <li class="flex gap-2"><span class="text-indigo-400">•</span><span><strong>AC21.01</strong> — Spécifications fonctionnelles & non fonctionnelles</span></li>
                <li class="flex gap-2"><span class="text-indigo-400">•</span><span><strong>AC21.04</strong> — Tests & validation</span></li>
                <li class="flex gap-2"><span class="text-indigo-400">•</span><span><strong>AC31.02</strong> — Faire évoluer une application existante</span></li>
              </ul>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <div class="flex items-center gap-3 mb-3"><span class="text-2xl">🔒</span><h4 class="text-indigo-300 font-bold text-lg">UE Optimiser</h4></div>
              <ul class="text-slate-300 text-sm space-y-2">
                <li class="flex gap-2"><span class="text-indigo-400">•</span><span><strong>AC22.03</strong> — Sécurisation des données et du code (droits, DB2/SQL Server)</span></li>
                <li class="flex gap-2"><span class="text-indigo-400">•</span><span><strong>AC32.03</strong> — Choisir et utiliser des bibliothèques adaptées (Entity Framework, tooling Vue)</span></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
.animate-blob { animation: blob 7s infinite; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
</style>
