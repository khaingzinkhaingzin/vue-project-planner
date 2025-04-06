<template>
  <FilterNav class="mb-3" @filterValue="filter = $event"></FilterNav>
  <div v-if="projects">
    <div v-for="project in filteredProjects" :key="project.id">
      <SingleProject
        :project="project"
        @deleted="deleteProject"
        @updatedStatus="changeStatus"
      />
    </div>
  </div>
</template>

<script>
import FilterNav from "../components/FilterNav.vue";
import Navbar from "../components/Navbar.vue";
import SingleProject from "../components/SingleProject.vue";
export default {
  data() {
    return {
      api: "http://localhost:3000/projects",
      projects: [],
      filter: "all",
    };
  },
  components: {
    FilterNav,
    Navbar,
    SingleProject,
  },
  methods: {
    deleteProject(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      });
    },
    changeStatus(id, status) {
      let project = this.projects.find((project) => {
        return project.id === id;
      });
      project.status = status;
    },
  },
  computed: {
    filteredProjects() {
      console.log(this.filter);

      if (this.filter !== "all") {
        return this.projects.filter((project) => {
          return project.status === this.filter;
        });
      }

      return this.projects;
    },
  },
  mounted() {
    fetch(`${this.api}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.projects = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
