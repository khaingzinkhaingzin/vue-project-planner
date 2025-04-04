<template>
  <div
    class="project card mb-3 px-3 py-3"
    :class="{
      pending: this.project.status === 'pending',
      inprogress: this.project.status === 'inprogress',
      complete: this.project.status === 'complete',
    }"
  >
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h4 @click="showDetail = !showDetail">{{ project.title }}</h4>
      </div>
      <div class="action d-flex align-items-center">
        <span class="material-symbols-outlined delete" @click="deleteProject">
          delete
        </span>
        <span class="material-symbols-outlined edit"> edit </span>
        <select class="form-control" v-model="status" @change="changeStatus">
          <option value="pending">pending</option>
          <option value="inprogress">inprogress</option>
          <option value="complete">complete</option>
        </select>
      </div>
    </div>
    <p v-if="showDetail" class="pt-3">{{ project.detail }}</p>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetail: false,
      api: "http://localhost:3000/projects",
      status: this.project.status,
    };
  },
  methods: {
    deleteProject() {
      fetch(`${this.api}/${this.project.id}`, { method: "DELETE" })
        .then((response) => {
          if (response.status === 200) {
            this.$emit("deleted", this.project.id);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeStatus() {
      fetch(`${this.api}/${this.project.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: this.status,
        }),
      })
        .then((response) => {
          if (response.status === 200) {
            this.$emit("updatedStatus", this.project.id, this.status);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.project {
  border-left: 5px solid;
  background: rgb(236, 250, 255);
}
h4 {
  color: indigo;
  cursor: pointer;
}
.action span {
  margin-right: 3px;
}
.action span:hover {
  color: #909090;
}
.action > .delete {
  cursor: pointer;
  color: red;
}
.action > .edit {
  cursor: pointer;
  color: rgb(237, 187, 81);
}
.pending {
  border-left-color: rgb(228, 128, 128);
}
.inprogress {
  border-left-color: rgb(128, 186, 228);
}
.complete {
  border-left-color: rgb(128, 228, 181);
}
</style>
