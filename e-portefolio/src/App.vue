<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div>
    <!-- Navigation Header -->
    <header class="sticky top-0 z-50 bg-slate-800/80 backdrop-blur-md border-b border-indigo-500/20">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <router-link to="/" class="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
          ETHANN
        </router-link>

        <div class="flex gap-8 items-center">
          <router-link 
            to="/" 
            :class="router.currentRoute.value.path === '/' ? 'text-indigo-400 underline' : 'text-slate-300 hover:text-indigo-400'"
            class="font-semibold transition-colors"
          >
            À propos
          </router-link>
          <router-link 
            to="/competences" 
            :class="router.currentRoute.value.path === '/competences' ? 'text-indigo-400' : 'text-slate-300 hover:text-indigo-400'"
            class="font-semibold transition-colors"
          >
            Compétences
          </router-link>
          <router-link 
            to="/experiences" 
            :class="router.currentRoute.value.path === '/experiences' ? 'text-indigo-400' : 'text-slate-300 hover:text-indigo-400'"
            class="font-semibold transition-colors"
          >
            Expériences
          </router-link>
          <router-link 
            to="/loisirs" 
            :class="router.currentRoute.value.path === '/loisirs' ? 'text-indigo-400' : 'text-slate-300 hover:text-indigo-400'"
            class="font-semibold transition-colors"
          >
            Loisirs
          </router-link>
          <router-link 
            to="/formation" 
            :class="router.currentRoute.value.path === '/formation' ? 'text-indigo-400' : 'text-slate-300 hover:text-indigo-400'"
            class="font-semibold transition-colors"
          >
            Ma formation
          </router-link>
          <router-link 
            to="/mes-atouts" 
            :class="router.currentRoute.value.path === '/mes-atouts' ? 'text-indigo-400' : 'text-slate-300 hover:text-indigo-400'"
            class="font-semibold transition-colors"
          >
            Mes atouts
          </router-link>
        </div>
      </nav>
    </header>

    <!-- Router View -->
    <router-view />
  </div>
</template>

<style scoped>
</style>
