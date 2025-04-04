<template>
  <div v-if="projects">
    <div v-for="project in projects" :key="project.id">
      <SingleProject
        :project="project"
        @deleted="deleteProject"
        @updatedStatus="changeStatus"
      />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import SingleProject from "../components/SingleProject.vue";
export default {
  data() {
    return {
      projects: [],
    };
  },
  components: {
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
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.projects = data;
        console.log(this.projects);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
