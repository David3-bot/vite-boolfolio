<script>
import ProjectCard from "./components/ProjectCard.vue"
import axios from "axios";


export default {
  components: {ProjectCard},
  data() {
    return {
      backedUrl: "http://localhost:8000/",
      project: [],
    };
  },
  methods: {
    fetchProject() {
      axios.get(this.backedUrl + "/api/projects").then((resp) => {
        this.project = resp.data;
      });
    },
  },
  beforeMount() { },
  mounted() {
    this.fetchProject();
  },
}
</script>

<template>
  <div class="container">
    <h1>scemo chi legge</h1>
    <div>
      <ProjectCard></ProjectCard>
      <router-view></router-view>
    </div>
</div>
</template>

<style lang="scss">@use "styles/main";</style>