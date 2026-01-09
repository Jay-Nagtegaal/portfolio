<template>
  <div class="projects">
    <h1 class="page-title">My Projects</h1>
    
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
            @click="selectedCategory = 'work'" 
            :class="{ active: selectedCategory === 'work' }"
            class="filter-button category-work"
          >
            Work ({{ getCategoryCount('work') }})
          </button>
        </div>
      </div>

      <!-- Skills/Tags Filter -->
      <div class="filter-group">
        <h3 class="filter-title">Skills</h3>
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
        <div class="project-category-badge" :class="`badge-${project.category}`">
          {{ project.category }}
        </div>
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
        <button class="view-button">View Details →</button>
      </div>
    </div>

    <!-- No Results Message -->
    <div v-if="filteredProjects.length === 0" class="no-results">
      <p>No projects found matching your filters.</p>
      <button @click="clearFilters" class="clear-button">Clear Filters</button>
    </div>

    <!-- Project Detail Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeProject">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeProject">×</button>
        <div class="modal-header">
          <div class="modal-category-badge" :class="`badge-${selectedProject.category}`">
            {{ selectedProject.category }}
          </div>
          <h2 class="modal-title">{{ selectedProject.title }}</h2>
        </div>
        <div class="modal-body">
          <div class="modal-section">
            <h3>Description</h3>
            <p>{{ selectedProject.description }}</p>
          </div>
          <div class="modal-section">
            <h3>Details</h3>
            <p>{{ selectedProject.details }}</p>
          </div>
          <div class="modal-section">
            <h3>Technologies Used</h3>
            <div class="modal-tags">
              <span v-for="tag in selectedProject.tags" :key="tag" class="tag">
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
import { ref, computed } from 'vue'
import { projectsData } from '../data/projects.js'

export default {
  name: 'Projects',
  setup() {
    const selectedCategory = ref('all')
    const selectedTags = ref([])
    const selectedProject = ref(null)

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
      selectedProject.value = project
    }

    const closeProject = () => {
      selectedProject.value = null
    }

    return {
      projectsData,
      selectedCategory,
      selectedTags,
      selectedProject,
      allTags,
      filteredProjects,
      getCategoryCount,
      getTagCount,
      toggleTag,
      clearFilters,
      openProject,
      closeProject
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
  color: #000;
}

.filters-section {
  background: white;
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
  color: #000;
}

.category-buttons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.filter-button {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  color: #495057;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.filter-button:hover {
  background: #e9ecef;
  border-color: #dee2e6;
}

.filter-button.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
}

.category-personal.active {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-color: #f093fb;
}

.category-school.active {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-color: #4facfe;
}

.category-work.active {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  border-color: #43e97b;
}

.tags-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag-button {
  background: white;
  border: 2px solid #dee2e6;
  color: #495057;
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
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.results-count {
  color: #666;
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
  background: white;
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

.project-category-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: white;
}

.badge-personal {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.badge-school {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.badge-work {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #000;
}

.project-description {
  color: #666;
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
  background: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.view-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.no-results p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.clear-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 16px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #e9ecef;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: #495057;
  z-index: 10;
}

.close-button:hover {
  background: #dee2e6;
  transform: scale(1.1);
}

.modal-header {
  padding: 2rem 2rem 1rem 2rem;
}

.modal-category-badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: white;
}

.modal-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
}

.modal-body {
  padding: 0 2rem 2rem 2rem;
}

.modal-section {
  margin-bottom: 1.5rem;
}

.modal-section:last-child {
  margin-bottom: 0;
}

.modal-section h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #000;
}

.modal-section p {
  color: #495057;
  line-height: 1.6;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.modal-tags .tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
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

  .modal-content {
    max-height: 95vh;
  }

  .modal-header,
  .modal-body {
    padding: 1.5rem;
  }
}
</style>
