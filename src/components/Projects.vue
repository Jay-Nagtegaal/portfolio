<template>
  <div class="projects">
    <h1 class="page-title">Mijn Projecten</h1>
    
    <!-- Category Filter -->
    <div class="filters-section">
      <div class="filter-group">
        <h3 class="filter-title">Category</h3>
        <div class="category-buttons">
          <button 
            @click="selectedCategory = 'all'" 
            :class="{ active: selectedCategory === 'all' }"
            class="filter-button"
          >
            All ({{ projectsData.length }})
          </button>
          <button 
            @click="selectedCategory = 'personal'" 
            :class="{ active: selectedCategory === 'personal' }"
            class="filter-button category-personal"
          >
            Personal ({{ getCategoryCount('personal') }})
          </button>
          <button 
            @click="selectedCategory = 'school'" 
            :class="{ active: selectedCategory === 'school' }"
            class="filter-button category-school"
          >
            School ({{ getCategoryCount('school') }})
          </button>
          <button 
            @click="selectedCategory = 'future'" 
            :class="{ active: selectedCategory === 'future' }"
            class="filter-button category-future"
          >
            Toekomstplannen ({{ getCategoryCount('future') }})
          </button>
        </div>
      </div>

      <!-- Skills/Tags Filter -->
      <div class="filter-group">
        <h3 class="filter-title">Vaardigheden</h3>
        <div class="tags-buttons">
          <button 
            v-for="tag in allTags" 
            :key="tag"
            @click="toggleTag(tag)"
            :class="{ active: selectedTags.includes(tag) }"
            class="tag-button"
          >
            {{ tag }} ({{ getTagCount(tag) }})
          </button>
        </div>
      </div>
    </div>

    <!-- Project Count -->
    <div class="results-count">
      Showing {{ filteredProjects.length }} project{{ filteredProjects.length !== 1 ? 's' : '' }}
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="project-card"
        @click="openProject(project)"
      >
        <div class="project-header-badges">
          <div class="project-category-badge" :class="`badge-${project.category}`">
            {{ project.category }}
          </div>
          <div v-if="project.status === 'in-progress'" class="status-badge">
            🔨 In Progress
          </div>
        </div>
        <div class="project-image-preview">
          <img :src="project.headerImage" :alt="project.title + ' preview'" class="project-preview-img" />
        </div>
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
        <button class="view-button">Bekijk Project →</button>
      </div>
    </div>

    <!-- No Results Message -->
    <div v-if="filteredProjects.length === 0" class="no-results">
      <p>No projects found matching your filters.</p>
      <button @click="clearFilters" class="clear-button">Clear Filters</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { projectsData } from '../data/projects.js'

export default {
  name: 'Projects',
  emits: ['view-project'],
  setup(props, { emit }) {
    const selectedCategory = ref('all')
    const selectedTags = ref([])

    // Get all unique tags from projects
    const allTags = computed(() => {
      const tags = new Set()
      projectsData.forEach(project => {
        project.tags.forEach(tag => tags.add(tag))
      })
      return Array.from(tags).sort()
    })

    // Filter projects based on selected category and tags
    const filteredProjects = computed(() => {
      let filtered = projectsData

      // Filter by category
      if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(p => p.category === selectedCategory.value)
      }

      // Filter by tags (show projects that have ALL selected tags)
      if (selectedTags.value.length > 0) {
        filtered = filtered.filter(project => {
          return selectedTags.value.every(tag => project.tags.includes(tag))
        })
      }

      return filtered
    })

    const getCategoryCount = (category) => {
      return projectsData.filter(p => p.category === category).length
    }

    const getTagCount = (tag) => {
      return projectsData.filter(p => p.tags.includes(tag)).length
    }

    const toggleTag = (tag) => {
      const index = selectedTags.value.indexOf(tag)
      if (index > -1) {
        selectedTags.value.splice(index, 1)
      } else {
        selectedTags.value.push(tag)
      }
    }

    const clearFilters = () => {
      selectedCategory.value = 'all'
      selectedTags.value = []
    }

    const openProject = (project) => {
      emit('view-project', project)
    }

    return {
      projectsData,
      selectedCategory,
      selectedTags,
      allTags,
      filteredProjects,
      getCategoryCount,
      getTagCount,
      toggleTag,
      clearFilters,
      openProject
    }
  }
}
</script>

<style scoped>
.projects {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.filters-section {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.filter-group {
  margin-bottom: 1.5rem;
}

.filter-group:last-child {
  margin-bottom: 0;
}

.filter-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.category-buttons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.filter-button {
  background: var(--item-bg);
  border: 2px solid var(--item-hover-bg);
  color: var(--text-primary);
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.filter-button:hover {
  background: var(--item-hover-bg);
  border-color: var(--item-hover-bg);
}

.filter-button.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.category-personal.active {
  background: #ec4899;
  border-color: #ec4899;
}

.category-school.active {
  background: #06b6d4;
  border-color: #06b6d4;
}

.category-future.active {
  background: #8b5cf6;
  border-color: #8b5cf6;
}

.tags-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag-button {
  background: var(--card-bg);
  border: 2px solid var(--item-hover-bg);
  color: var(--text-primary);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tag-button:hover {
  border-color: #667eea;
  color: #667eea;
}

.tag-button.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.results-count {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.project-header-badges {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.project-category-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
}

.status-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  background: #10b981;
  color: white;
}

.badge-personal {
  background: #ec4899;
}

.badge-school {
  background: #06b6d4;
}

.badge-future {
  background: #8b5cf6;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.project-image-preview {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}

.project-preview-img {
  max-width: 100%;
  max-height: 140px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: var(--item-bg);
  color: var(--text-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.view-button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  width: 100%;
  transition: opacity 0.3s ease;
}

.view-button:hover {
  opacity: 0.9;
}

.no-results {
  text-align: center;
  padding: 3rem;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.no-results p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.clear-button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.clear-button:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .category-buttons {
    flex-direction: column;
  }
  
  .filter-button {
    width: 100%;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
