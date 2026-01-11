<template>
  <div class="app">
    <header class="header">
      <h1>Mijn Portfolio</h1>
      <nav class="nav">
        <button 
          @click="navigateTo('about')"
          :class="{ active: currentView === 'about' }"
          class="nav-button"
        >
          Over Mij
        </button>
        <button
          @click="navigateTo('projects')"
          :class="{ active: currentView === 'projects' || currentView === 'project-detail' }"
          class="nav-button"
        >
          Projecten
        </button>
      </nav>
    </header>
    
    <main>
      <About
        v-if="currentView === 'about'"
      />
      <Projects
        v-else-if="currentView === 'projects'"
        @view-project="viewProject"
      />
      <ProjectDetail 
        v-else-if="currentView === 'project-detail' && selectedProject"
        :project="selectedProject"
        @back="navigateTo('projects')"
      />
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import Projects from './components/Projects.vue'
import ProjectDetail from './components/ProjectDetail.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Projects,
    ProjectDetail,
    About
  },
  setup() {
    const currentView = ref('about')
    const selectedProject = ref(null)
    
    const navigateTo = (view) => {
      currentView.value = view
      if (view !== 'project-detail') {
        selectedProject.value = null
      }
    }

    const viewProject = (project) => {
      selectedProject.value = project
      currentView.value = 'project-detail'
    }

    return {
      currentView,
      selectedProject,
      navigateTo,
      viewProject
    }
  }
}
</script>

<style scoped>
.app {
  min-height: 100vh;
}

.header {
  background: #3b82f6;
  color: white;
  padding: 1.5rem 2rem;
  margin: -1rem -1rem 2rem -1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-button {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid transparent;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.nav-button.active {
  background: white;
  color: #667eea;
  font-weight: 600;
}

main {
  padding: 0 1rem;
}
</style>
