<template>
  <ul class="nav">
    <li class="nav-item" :class="{ filter_active: filter === 'all' }">
      <a class="nav-link" href="#" @click="filterBy('all')">All</a>
    </li>
    <li class="nav-item" :class="{ filter_active: filter === 'pending' }">
      <a class="nav-link" href="#" @click="filterBy('pending')">Pending</a>
    </li>
    <li class="nav-item" :class="{ filter_active: filter === 'inprogress' }">
      <a class="nav-link" href="#" @click="filterBy('inprogress')"
        >In Progress</a
      >
    </li>
    <li class="nav-item" :class="{ filter_active: filter === 'complete' }">
      <a class="nav-link" href="#" @click="filterBy('complete')">Complete</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      filter: "all",
    };
  },
  methods: {
    filterBy(value) {
      this.filter = value;
      this.$emit("filterValue", value);
    },
  },
};
</script>

<style>
.filter_active {
  background-color: rgb(239, 241, 244);
}
</style>
