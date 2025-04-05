<template>
  <div class="bg-danger">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img :src="logo" alt="" width="70" class="rounded-circle mr-3" />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <RouterLink :to="{ name: 'home' }" class="nav-link"
              >Projects</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'addProject' }" class="nav-link"
              >Add Project</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: "/image/project_planner.jpeg",
    };
  },
};
</script>

<style scoped>
.navbar {
  padding: 1.5rem 1rem;
}
.router-link-active {
  border-bottom: 2px solid #1b2531;
}
</style>
