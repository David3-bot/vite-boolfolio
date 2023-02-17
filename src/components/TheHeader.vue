<script>
export default {
  data() {
    return {
      Navbar: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Project",
          routeName: "project",
        },
        {
          label: "Contatti",
          routeName: "contatti",
        },
      ],
    };
  },
};
</script>
<template>
    <div>
        <div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                data-bs-auto-close="true" aria-expanded="false">
                Default dropdown
            </button>
            <ul class="dropdown-menu">
                <li  v-for="(item, index) in Navbar" :key="index"><a class="dropdown-item" href="#"></a></li>
            </ul>
        </div>

    </div>
</template>

<style scoped lang="scss"></style>