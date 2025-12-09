<script setup>
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
    <div class="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div class="absolute top-40 right-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

    <div class="relative z-10">
      <header class="pt-12 pb-8 max-w-5xl mx-auto px-6">
        <p class="text-sm uppercase tracking-[0.2em] text-indigo-300/70">Projet étudiant — Jeu Unity</p>
        <h1 class="text-5xl font-bold text-white mb-4">Hunter</h1>
        <p class="text-indigo-300 text-lg mb-6">Jeu d'élimination de monstres — Unity — 1 semaine en équipe de 3</p>

        <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-2xl p-6 border border-indigo-500/30 mb-8">
          <h2 class="text-xl font-bold text-indigo-200 mb-3">Apprentissages Critiques</h2>
          <ul class="space-y-2 text-slate-300">
            <li>• <span class="text-indigo-300 font-semibold">AC16.03</span> – Identifier les statuts, fonctions et rôles de chaque membre d'une équipe pluridisciplinaire</li>
            <li>• <span class="text-indigo-300 font-semibold">AC16.04</span> – Acquérir les compétences interpersonnelles pour travailler en équipe</li>
            <li>• <span class="text-indigo-300 font-semibold">AC26.02</span> – Appliquer une démarche pour intégrer une équipe informatique au sein d'une organisation</li>
            <li>• <span class="text-indigo-300 font-semibold">AC26.03</span> – Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique</li>
          </ul>
        </div>

        <div class="flex flex-wrap gap-6 text-slate-300">
          <div class="flex items-center gap-2">
            <span class="text-indigo-400 text-2xl">👥</span>
            <span><strong class="text-indigo-300">Équipe de 3</strong> personnes</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-indigo-400 text-2xl">⏱️</span>
            <span><strong class="text-indigo-300">1 semaine</strong> de développement</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-indigo-400 text-2xl">🎮</span>
            <span><strong class="text-indigo-300">Unity</strong> / <strong class="text-indigo-300">C#</strong></span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-indigo-400 text-2xl">🎨</span>
            <span><strong class="text-indigo-300">Blender</strong> / <strong class="text-indigo-300">Assets</strong></span>
          </div>
        </div>
      </header>

      <main class="max-w-5xl mx-auto px-6 py-16">
        <!-- Concept & Objectif -->
        <section class="mb-20">
          <h2 class="text-3xl font-bold text-white mb-6 pb-4 border-b border-indigo-500/30">Partie 1 : Concept & Objectif</h2>
          <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-2xl p-8 border border-indigo-500/30 mb-6">
            <p class="text-slate-300 text-lg leading-relaxed mb-4">
              Hunter est un jeu d'élimination de monstres où le joueur doit <strong class="text-indigo-300">tuer le maximum de monstres pour gagner des points d'expérience</strong>.
            </p>
            <p class="text-slate-300 text-lg leading-relaxed">
              Ce projet a été réalisé en <strong class="text-indigo-300">équipe de trois</strong>, avec une répartition claire des responsabilités : développement gameplay, création d'assets 3D (Blender) et design sonore.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h3 class="text-indigo-300 font-bold text-lg mb-3">🎯 Objectif Principal</h3>
              <p class="text-slate-300">Tuer le maximum de monstres pour accumuler des points d'expérience</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h3 class="text-indigo-300 font-bold text-lg mb-3">🕹️ Genre</h3>
              <p class="text-slate-300">Jeu d'action — Élimination de vagues de monstres</p>
            </div>
          </div>
        </section>

        <!-- Gameplay & Mécanique -->
        <section class="mb-20">
          <h2 class="text-3xl font-bold text-white mb-6 pb-4 border-b border-indigo-500/30">Partie 2 : Gameplay & Mécanique</h2>
          <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-2xl p-8 border border-indigo-500/30 mb-8">
            <p class="text-slate-300 text-lg leading-relaxed mb-4">
              Le joueur dispose de <strong class="text-indigo-300">deux armes distinctes</strong> avec des mécaniques différentes. Le choix stratégique entre rapidité et puissance influence la progression et le scoring.
            </p>
            <p class="text-slate-300 text-lg leading-relaxed">
              Les monstres spawnnent en vagues progressives, augmentant la <strong class="text-indigo-300">difficulté</strong> au fil du temps.
            </p>
          </div>

          <h3 class="text-2xl font-bold text-indigo-200 mb-6">⚔️ Système d'Armes</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-lg p-6 border border-indigo-500/20 hover:border-indigo-400/40 transition-all">
              <div class="flex items-center gap-3 mb-4"><span class="text-3xl">⚡</span><h4 class="text-indigo-300 font-bold text-lg">Pistolet Laser</h4></div>
              <ul class="text-slate-300 space-y-2">
                <li>• <strong>Portée :</strong> courte</li>
                <li>• <strong>Cadence :</strong> rapide</li>
                <li>• <strong>Dégâts :</strong> faibles</li>
                <li>• <strong>Stratégie :</strong> pour une élimination continue</li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-lg p-6 border border-indigo-500/20 hover:border-indigo-400/40 transition-all">
              <div class="flex items-center gap-3 mb-4"><span class="text-3xl">🎯</span><h4 class="text-indigo-300 font-bold text-lg">Fusil de Précision</h4></div>
              <ul class="text-slate-300 space-y-2">
                <li>• <strong>Portée :</strong> longue</li>
                <li>• <strong>Cadence :</strong> lente</li>
                <li>• <strong>Dégâts :</strong> élevés</li>
                <li>• <strong>Stratégie :</strong> pour éliminer rapidement les cibles prioritaires</li>
              </ul>
            </div>
          </div>

          <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
            <h3 class="text-indigo-300 font-bold text-lg mb-4">📊 Progression & Scoring</h3>
            <ul class="text-slate-300 space-y-3">
              <li class="flex items-start gap-3"><span class="text-indigo-400">▸</span><span>Chaque monstre tué rapporte des points d'expérience</span></li>
              <li class="flex items-start gap-3"><span class="text-indigo-400">▸</span><span>Vagues progressives : difficulté croissante à chaque élimination</span></li>
              <li class="flex items-start gap-3"><span class="text-indigo-400">▸</span><span>Système de score permettant le classement et la rejouabilité</span></li>
            </ul>
          </div>
        </section>

        <!-- Assets & Création 3D -->
        <section class="mb-20">
          <h2 class="text-3xl font-bold text-white mb-6 pb-4 border-b border-indigo-500/30">Partie 3 : Création d'Assets & Design</h2>
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h3 class="text-indigo-300 font-bold text-lg mb-3">🗺️ Carte & Environnement</h3>
              <p class="text-slate-300 text-sm">Créée avec les assets standards Unity pour un environnement cohérent et jouable.</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h3 class="text-indigo-300 font-bold text-lg mb-3">🎨 Armes & Monstres</h3>
              <p class="text-slate-300 text-sm">Modélisation 3D avec Blender pour créer armes et monstres personnalisés.</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h3 class="text-indigo-300 font-bold text-lg mb-3">🔊 Conception Sonore</h3>
              <p class="text-slate-300 text-sm">Sons d'ambiance et effets créés par l'équipe pour l'immersion.</p>
            </div>
          </div>
        </section>

        <!-- Répartition du Travail & Collaboration -->
        <section class="mb-20">
          <h2 class="text-3xl font-bold text-white mb-6 pb-4 border-b border-indigo-500/30">Partie 4 : Travail d'Équipe & Collaboration</h2>
          <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-2xl p-8 border border-indigo-500/30 mb-8">
            <p class="text-slate-300 text-lg leading-relaxed mb-6">
              Ce projet a mis en avant l'<strong class="text-indigo-300">importance du travail en équipe</strong>. Chacun des trois membres a pris en charge un domaine spécifique tout en gardant une communication constante pour assurer la cohésion globale du jeu.
            </p>
            <p class="text-slate-300 text-lg leading-relaxed">
              Cette expérience démontre notre capacité à nous <strong class="text-indigo-300">organiser, déléguer</strong> et <strong class="text-indigo-300">collaborer efficacement</strong> dans un contexte de développement multimédia.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-3xl">💻</span>
                <h4 class="text-indigo-300 font-bold text-lg">Gameplay & Code</h4>
              </div>
              <ul class="text-slate-300 space-y-2 text-sm">
                <li>• Développement de la logique du jeu</li>
                <li>• Système de combat</li>
                <li>• Gestion des vagues de monstres</li>
                <li>• Scoring & progression</li>
              </ul>
            </div>

            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-3xl">🎨</span>
                <h4 class="text-indigo-300 font-bold text-lg">3D & Assets</h4>
              </div>
              <ul class="text-slate-300 space-y-2 text-sm">
                <li>• Modélisation Blender (armes, monstres)</li>
                <li>• Intégration des assets dans Unity</li>
                <li>• Design visuel & couleurs</li>
                <li>• Animations & effets visuels</li>
              </ul>
            </div>

            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-3xl">🔊</span>
                <h4 class="text-indigo-300 font-bold text-lg">Audio & UX</h4>
              </div>
              <ul class="text-slate-300 space-y-2 text-sm">
                <li>• Design sonore personnalisé</li>
                <li>• Effets de tir & impact</li>
                <li>• Ambiance & musique</li>
                <li>• Interface utilisateur</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Compétences Mobilisées -->
        <section class="mb-20">
          <h2 class="text-3xl font-bold text-white mb-6 pb-4 border-b border-indigo-500/30">Partie 5 : Compétences Mobilisées</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-2xl">👥</span>
                <h4 class="text-indigo-300 font-bold text-lg">UE Collaborer — Niveau 1</h4>
              </div>
              <p class="text-slate-300 text-sm mb-4 font-semibold">Identifier ses aptitudes pour travailler dans une équipe</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li class="flex items-start gap-2"><span class="text-indigo-400">•</span><span><strong>AC16.03</strong> – Identifier les statuts, fonctions et rôles de chaque membre d'une équipe pluridisciplinaire</span></li>
                <li class="flex items-start gap-2"><span class="text-indigo-400">•</span><span><strong>AC16.04</strong> – Acquérir les compétences interpersonnelles pour travailler en équipe</span></li>
              </ul>
            </div>

            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-2xl">🤝</span>
                <h4 class="text-indigo-300 font-bold text-lg">UE Collaborer — Niveau 2</h4>
              </div>
              <p class="text-slate-300 text-sm mb-4 font-semibold">Situer son rôle et ses missions au sein d'une équipe informatique</p>
              <ul class="text-slate-300 text-sm space-y-2">
                <li class="flex items-start gap-2"><span class="text-indigo-400">•</span><span><strong>AC26.02</strong> – Appliquer une démarche pour intégrer une équipe informatique au sein d'une organisation</span></li>
                <li class="flex items-start gap-2"><span class="text-indigo-400">•</span><span><strong>AC26.03</strong> – Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique</span></li>
              </ul>
            </div>
          </div>

          <div class="mt-8 bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-2xl p-6 border border-indigo-500/30">
            <h3 class="text-indigo-300 font-bold text-lg mb-3">💡 Points forts du projet</h3>
            <ul class="text-slate-300 space-y-2">
              <li class="flex items-start gap-3"><span class="text-indigo-400">▸</span><span>Répartition claire des responsabilités entre les trois membres</span></li>
              <li class="flex items-start gap-3"><span class="text-indigo-400">▸</span><span>Communication constante pour assurer la cohésion du jeu</span></li>
              <li class="flex items-start gap-3"><span class="text-indigo-400">▸</span><span>Intégration seamless de tous les éléments (code, 3D, audio)</span></li>
              <li class="flex items-start gap-3"><span class="text-indigo-400">▸</span><span>Démonstration de compétences pluridisciplinaires</span></li>
            </ul>
          </div>
        </section>

        <!-- Architecture & Stack -->
        <section class="mb-20">
          <h2 class="text-3xl font-bold text-white mb-6 pb-4 border-b border-indigo-500/30">Partie 6 : Architecture & Stack</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h3 class="text-indigo-300 font-bold text-lg mb-4">🛠️ Stack Technologique</h3>
              <ul class="text-slate-300 space-y-3">
                <li class="flex items-center gap-3"><span class="text-indigo-400">▫️</span><span><strong>Moteur :</strong> Unity</span></li>
                <li class="flex items-center gap-3"><span class="text-indigo-400">▫️</span><span><strong>Langage :</strong> C#</span></li>
                <li class="flex items-center gap-3"><span class="text-indigo-400">▫️</span><span><strong>Modélisation 3D :</strong> Blender</span></li>
                <li class="flex items-center gap-3"><span class="text-indigo-400">▫️</span><span><strong>Assets :</strong> Unity Asset Store</span></li>
                <li class="flex items-center gap-3"><span class="text-indigo-400">▫️</span><span><strong>Audio :</strong> DAW personnalisée</span></li>
              </ul>
            </div>

            <div class="bg-slate-800/50 rounded-lg p-6 border border-indigo-500/20">
              <h3 class="text-indigo-300 font-bold text-lg mb-4">✅ Réalisations Techniques</h3>
              <ul class="text-slate-300 space-y-3">
                <li class="flex items-start gap-3"><span class="text-indigo-400">▸</span><span>Système de combat complet avec deux armes distinctes</span></li>
                <li class="flex items-start gap-3"><span class="text-indigo-400">▸</span><span>Spawning et gestion des vagues de monstres</span></li>
                <li class="flex items-start gap-3"><span class="text-indigo-400">▸</span><span>Physique de jeu et collisions</span></li>
                <li class="flex items-start gap-3"><span class="text-indigo-400">▸</span><span>Système de scoring et progression</span></li>
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
