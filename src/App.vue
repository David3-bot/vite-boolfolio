<script>
import axios from "axios";

export default {
  data() {
    return {
      backedUrl: "http://localhost:8000",
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
  beforeMount() {},
  mounted() {
    this.fetchProject();
  },
}
</script>

<template>
<TheMain></TheMain>


</template>

<style lang="scss">
  @use "styles/main";
</style>
