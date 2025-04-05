<template>
  <form @submit.prevent="updateProject">
    <div class="form-group">
      <label>Project Title</label>
      <input type="text" class="form-control" v-model="title" ref="title" />
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea class="form-control" rows="3" v-model="description"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">
      <div class="d-flex">
        <span class="material-symbols-outlined mr-2"> check_circle </span>
        <span>Update</span>
      </div>
    </button>
  </form>
</template>

<script>
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      description: "",
      api: "http://localhost:3000/projects",
      project: {},
    };
  },
  methods: {
    updateProject() {
      fetch(`${this.api}/${this.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          detail: this.description,
          status: this.project.status,
        }),
      })
        .then(() => {
          this.title = "";
          this.description = "";
          toast.success("Successfully !");
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    fetch(`${this.api}/${this.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.project = data;
        this.title = data.title;
        this.description = data.detail;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
