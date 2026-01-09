<template>
  <div class="app">
    <header class="header">
      <h1>My Portfolio</h1>
      <nav class="nav">
        <button 
          @click="currentView = 'home'" 
          :class="{ active: currentView === 'home' }"
          class="nav-button"
        >
          Home
        </button>
        <button 
          @click="currentView = 'projects'" 
          :class="{ active: currentView === 'projects' }"
          class="nav-button"
        >
          Projects
        </button>
      </nav>
    </header>
    
    <main>
      <Home v-if="currentView === 'home'" />
      <Projects v-else-if="currentView === 'projects'" />
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    Home,
    Projects
  },
  setup() {
    const currentView = ref('home')
    
    return {
      currentView
    }
  }
}
</script>

<style scoped>
.app {
  min-height: 100vh;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
