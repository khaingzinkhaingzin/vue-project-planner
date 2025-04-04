<template>
  <form @submit.prevent="saveProject">
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
        <span>Save</span>
      </div>
    </button>
  </form>
</template>

<script>
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    saveProject() {
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          detail: this.description,
          status: "pending",
        }),
      })
        .then(() => {
          this.title = "";
          this.description = "";
          toast.success("Successfully created!");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.$refs.title.focus();
  },
};
</script>

<style></style>
