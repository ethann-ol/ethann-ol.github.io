<script setup>
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
    <!-- Bulles décoratives en arrière-plan -->
    <div class="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div class="absolute top-40 right-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

    <!-- Contenu principal -->
    <div class="relative z-10">
      <header class="pt-12 pb-8 max-w-6xl mx-auto px-6">
        <h1 class="text-5xl font-bold text-white mb-2">Mes atouts</h1>
        <p class="text-indigo-300 text-lg">Compétences transversales & comportementales</p>
      </header>

      <main class="max-w-6xl mx-auto px-6 py-20">
        <!-- Soft Skills principales -->
        <section class="mb-20">
          <h2 class="text-3xl font-bold text-white mb-12 text-center">Compétences Transversales</h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Soft Skill 1 -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">🤝</div>
                <h3 class="text-2xl font-bold text-indigo-200">Communication</h3>
              </div>
              <p class="text-slate-300 mb-4">
                Excellente capacité à communiquer tant à l'écrit qu'à l'oral. Capable d'expliquer des concepts techniques à des non-techniques et de collaborer efficacement en équipe.
              </p>
              <div class="w-full bg-slate-700 rounded-full h-3">
                <div class="bg-indigo-500 h-3 rounded-full" style="width: 85%"></div>
              </div>
              <p class="text-indigo-400 text-sm mt-2">Niveau : Avancé (85%)</p>
            </div>

            <!-- Soft Skill 2 -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">💡</div>
                <h3 class="text-2xl font-bold text-indigo-200">Résolution de Problèmes</h3>
              </div>
              <p class="text-slate-300 mb-4">
                Approche analytique et méthodique pour résoudre les problèmes. Capacité à décomposer les problèmes complexes en sous-tâches gérables.
              </p>
              <div class="w-full bg-slate-700 rounded-full h-3">
                <div class="bg-indigo-500 h-3 rounded-full" style="width: 90%"></div>
              </div>
              <p class="text-indigo-400 text-sm mt-2">Niveau : Très Avancé (90%)</p>
            </div>

            <!-- Soft Skill 3 -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">👥</div>
                <h3 class="text-2xl font-bold text-indigo-200">Travail d'Équipe</h3>
              </div>
              <p class="text-slate-300 mb-4">
                Collaboratif et empathique. J'aime travailler en équipe, partager mes connaissances et apprendre des autres. Respectueux des idées diverses.
              </p>
              <div class="w-full bg-slate-700 rounded-full h-3">
                <div class="bg-indigo-500 h-3 rounded-full" style="width: 88%"></div>
              </div>
              <p class="text-indigo-400 text-sm mt-2">Niveau : Très Avancé (88%)</p>
            </div>

            <!-- Soft Skill 4 -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">⚙️</div>
                <h3 class="text-2xl font-bold text-indigo-200">Adaptabilité</h3>
              </div>
              <p class="text-slate-300 mb-4">
                Très adaptable aux changements et aux nouvelles technologies. Apprends rapidement et suis toujours curieux de découvrir de nouveaux outils et frameworks.
              </p>
              <div class="w-full bg-slate-700 rounded-full h-3">
                <div class="bg-indigo-500 h-3 rounded-full" style="width: 92%"></div>
              </div>
              <p class="text-indigo-400 text-sm mt-2">Niveau : Expert (92%)</p>
            </div>

            <!-- Soft Skill 5 -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">🎯</div>
                <h3 class="text-2xl font-bold text-indigo-200">Rigueur & Organisation</h3>
              </div>
              <p class="text-slate-300 mb-4">
                Très organisé et rigoureux dans mon travail. Respecte les délais, documente le code et suit les bonnes pratiques de développement.
              </p>
              <div class="w-full bg-slate-700 rounded-full h-3">
                <div class="bg-indigo-500 h-3 rounded-full" style="width: 87%"></div>
              </div>
              <p class="text-indigo-400 text-sm mt-2">Niveau : Avancé (87%)</p>
            </div>

            <!-- Soft Skill 6 -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">🚀</div>
                <h3 class="text-2xl font-bold text-indigo-200">Autonomie & Proactivité</h3>
              </div>
              <p class="text-slate-300 mb-4">
                Autonome et proactif. Je ne crains pas de prendre l'initiative, de proposer des améliorations et de chercher des solutions innovantes.
              </p>
              <div class="w-full bg-slate-700 rounded-full h-3">
                <div class="bg-indigo-500 h-3 rounded-full" style="width: 89%"></div>
              </div>
              <p class="text-indigo-400 text-sm mt-2">Niveau : Très Avancé (89%)</p>
            </div>
          </div>
        </section>

        <!-- Langues -->
        <section class="mb-20">
          <h2 class="text-3xl font-bold text-white mb-12 text-center">Langues</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Français -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-8 border border-indigo-500/30">
              <h3 class="text-2xl font-bold text-indigo-200 mb-4">🇫🇷 Français</h3>
              <p class="text-slate-300 mb-4">Langue maternelle</p>
              <div class="w-full bg-slate-700 rounded-full h-3">
                <div class="bg-indigo-500 h-3 rounded-full" style="width: 100%"></div>
              </div>
              <p class="text-indigo-400 text-sm mt-2">Natif</p>
            </div>

            <!-- Anglais -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-8 border border-indigo-500/30">
              <h3 class="text-2xl font-bold text-indigo-200 mb-4">🇬🇧 Anglais</h3>
              <p class="text-slate-300 mb-4">Compréhension et communication professionnelle</p>
              <div class="w-full bg-slate-700 rounded-full h-3">
                <div class="bg-indigo-500 h-3 rounded-full" style="width: 75%"></div>
              </div>
              <p class="text-indigo-400 text-sm mt-2">Intermédiaire avancé</p>
            </div>

            <!-- Autres langues -->
            <div class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-8 border border-indigo-500/30">
              <h3 class="text-2xl font-bold text-indigo-200 mb-4">🌍 Autres</h3>
              <p class="text-slate-300 mb-4">Notions d'autres langues</p>
              <div class="w-full bg-slate-700 rounded-full h-3">
                <div class="bg-indigo-500 h-3 rounded-full" style="width: 40%"></div>
              </div>
              <p class="text-indigo-400 text-sm mt-2">Débutant</p>
            </div>
          </div>
        </section>

        <!-- Valeurs personnelles -->
        <section class="bg-gradient-to-r from-indigo-500/20 to-slate-700/20 rounded-3xl p-8 border border-indigo-500/30 mb-20">
          <h2 class="text-3xl font-bold text-white mb-8 text-center">Mes Valeurs Professionnelles</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-start gap-4">
              <span class="text-2xl">✨</span>
              <div>
                <h4 class="text-xl font-bold text-indigo-200 mb-2">Excellence</h4>
                <p class="text-slate-300">Je m'efforce toujours de produire un travail de haute qualité et de repousser mes limites.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="text-2xl">🤲</span>
              <div>
                <h4 class="text-xl font-bold text-indigo-200 mb-2">Responsabilité</h4>
                <p class="text-slate-300">Je prends mes engagements au sérieux et je suis responsable de mon travail et de ses résultats.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="text-2xl">🌱</span>
              <div>
                <h4 class="text-xl font-bold text-indigo-200 mb-2">Apprentissage Continu</h4>
                <p class="text-slate-300">Je suis passionné par l'apprentissage et le développement professionnel constant.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="text-2xl">💼</span>
              <div>
                <h4 class="text-xl font-bold text-indigo-200 mb-2">Intégrité</h4>
                <p class="text-slate-300">J'agis avec honnêteté et transparence dans toutes mes relations professionnelles.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="text-center py-20">
          <h2 class="text-3xl font-bold text-white mb-8">Vous me semblez être une bonne correspondance ?</h2>
          <div class="flex gap-4 justify-center flex-wrap">
            <router-link to="/" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              À propos de moi
            </router-link>
            <a href="#" class="px-8 py-3 border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 font-bold rounded-full transition-all duration-300">
              Me Contacter
            </a>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
