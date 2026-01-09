<template>
  <div class="home">
    <!-- Profile Header Card -->
    <div class="profile-card">
      <div class="profile-banner"></div>
      <div class="profile-content">
        <div class="profile-photo">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQEvmrCQvyFoYA/profile-displayphoto-scale_200_200/B4EZsEh8mcHgAc-/0/1765307567973?e=2147483647&v=beta&t=Nebf5sZdK9DaQXBdDuFPj2wvTRnVXMR5MPQ4AEYCpUQ" alt="Senna Garrelts" class="profile-image" />
        </div>
        <div class="profile-info">
          <h1 class="profile-name">Senna Garrelts</h1>
          <p class="profile-headline">Full Stack Developer | Creative technologist</p>
          <p class="profile-location">Arnhem</p>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="section-card">
      <h2 class="section-title">Over Mij</h2>
      <p class="about-text">
          Een gepossioneerde full-stack developer met een passie voor het creëren van dynamische en gebruiksvriendelijke webapplicaties.
          Met ervaring in zowel front-end als back-end technologieën, streef ik ernaar om innovatieve oplossingen te leveren die voldoen aan de behoeften van gebruikers en bedrijven.
      </p>
    </div>

    <!-- Skills Section -->
    <div class="section-card">
      <h2 class="section-title">Vaardigheden</h2>
      <div class="skills-grid">
        <div class="skill-badge" v-for="skill in skills" :key="skill">
          {{ skill }}
        </div>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="stats-container">
      <div class="stat-card">
        <div class="stat-number">{{ projectStats.personal }}</div>
        <div class="stat-label">Persoonlijke Projecten</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ projectStats.school }}</div>
        <div class="stat-label">School Projecten</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ projectStats.future }}</div>
        <div class="stat-label">Toekomstplannen</div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="section-card">
      <h2 class="section-title">Recente Projecten</h2>
      <div class="recent-projects">
        <div 
          v-for="project in recentProjects" 
          :key="project.id"
          class="recent-project-item"
          @click="viewProject(project)"
        >
          <div class="project-icon">📁</div>
          <div class="project-details">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-category">{{ project.category }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { projectsData } from '../data/projects.js'

export default {
  name: 'Home',
  emits: ['view-project'],
  setup(props, { emit }) {
    const skills = [
      'Python', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3',
      'PHP', 'Laravel', 'MySQL', 'FastAPI', 'Flask',
      'Docker', 'PowerShell', 'Windows Server', 'MS Intune',
      'Active Directory', 'API Integration', 'AI/ML'
    ]

    const projectStats = computed(() => {
      return {
        personal: projectsData.filter(p => p.category === 'personal').length,
        school: projectsData.filter(p => p.category === 'school').length,
        future: projectsData.filter(p => p.category === 'future').length
      }
    })

    const recentProjects = computed(() => {
      return projectsData.slice(0, 4)
    })

    const viewProject = (project) => {
      emit('view-project', project)
    }

    return {
      skills,
      projectStats,
      recentProjects,
      viewProject
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}

.profile-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.profile-banner {
  height: 120px;
  background: #3b82f6;
}

.profile-content {
  padding: 0 2rem 2rem 2rem;
  position: relative;
}

.profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 4px solid var(--card-bg);
  position: absolute;
  top: -60px;
  left: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.profile-info {
  padding-top: 80px;
  color: var(--text-primary);
}

.profile-name {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.profile-headline {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.profile-location {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.section-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.section-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.about-text {
  line-height: 1.6;
  color: var(--text-secondary);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-badge {
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.recent-projects {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.recent-project-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: var(--item-bg);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.recent-project-item:hover {
  background: var(--item-hover-bg);
  transform: translateX(5px);
}

.project-icon {
  font-size: 2rem;
  min-width: 40px;
}

.project-details {
  flex: 1;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.project-category {
  color: var(--text-secondary);
  font-size: 0.85rem;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: #3b82f6;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .profile-photo {
    width: 100px;
    height: 100px;
    top: -50px;
  }
  
  .profile-info {
    margin-top: 60px;
  }
  
  .stats-container {
    grid-template-columns: 1fr;
  }
}
</style>
