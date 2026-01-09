<template>
  <div class="home">
    <!-- Profile Header Card -->
    <div class="profile-card">
      <div class="profile-banner"></div>
      <div class="profile-content">
        <div class="profile-photo">
          <div class="photo-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
        <div class="profile-info">
          <h1 class="profile-name">Your Name</h1>
          <p class="profile-headline">Full Stack Developer | Web Designer | Problem Solver</p>
          <p class="profile-location">📍 Your Location</p>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="section-card">
      <h2 class="section-title">About</h2>
      <p class="about-text">
        Passionate developer with experience in building web applications using modern technologies. 
        Skilled in both frontend and backend development with a focus on creating user-friendly and 
        efficient solutions. Always eager to learn new technologies and tackle challenging problems.
      </p>
    </div>

    <!-- Skills Section -->
    <div class="section-card">
      <h2 class="section-title">Skills</h2>
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
        <div class="stat-label">Personal Projects</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ projectStats.school }}</div>
        <div class="stat-label">School Projects</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ projectStats.work }}</div>
        <div class="stat-label">Work Projects</div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="section-card">
      <h2 class="section-title">Recent Projects</h2>
      <div class="recent-projects">
        <div 
          v-for="project in recentProjects" 
          :key="project.id"
          class="recent-project-item"
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
  setup() {
    const skills = [
      'PHP', 'JavaScript', 'Vue.js', 'React', 'Node.js', 
      'MySQL', 'MongoDB', 'HTML5', 'CSS3', 'REST API',
      'Git', 'Responsive Design'
    ]

    const projectStats = computed(() => {
      return {
        personal: projectsData.filter(p => p.category === 'personal').length,
        school: projectsData.filter(p => p.category === 'school').length,
        work: projectsData.filter(p => p.category === 'work').length
      }
    })

    const recentProjects = computed(() => {
      return projectsData.slice(0, 4)
    })

    return {
      skills,
      projectStats,
      recentProjects
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
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.profile-banner {
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.profile-content {
  padding: 0 2rem 2rem 2rem;
  position: relative;
}

.profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  border: 4px solid white;
  position: absolute;
  top: -60px;
  left: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.photo-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.photo-placeholder svg {
  width: 60px;
  height: 60px;
}

.profile-info {
  margin-top: 70px;
  color: #000;
}

.profile-name {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #000;
}

.profile-headline {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.profile-location {
  color: #666;
  font-size: 0.95rem;
}

.section-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  color: #000;
}

.section-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000;
}

.about-text {
  line-height: 1.6;
  color: #333;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
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
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.recent-project-item:hover {
  background: #e9ecef;
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
  color: #000;
}

.project-category {
  color: #666;
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
  background: #667eea;
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
