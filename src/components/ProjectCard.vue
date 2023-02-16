<template>
    <h1>prova</h1>
    <section class="">
       <div class="text-center text-primary pt-4">
          <h1>Progetti</h1>
       </div>
       <div class="">
          <div class="container py-5">
             <div class="row g-4">
                <div class="col-3"  v-for="project in project" :key="project.id">
                   <div class="card text-center bg-danger">
                      <img src="{{  }}" class="card-img-top" alt="...">
                      <div class="card-body p-0 py-3">
                         <h3 class="card-title">{{ }}</h3>
                         <h5>Descrizione: {{ }}</h5>
                         <h5>Link: {{ }}</h5>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
 </template>

<script>
import axios from 'axios';
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
    beforeMount() { },
    mounted() {
        this.fetchProject();
    },
}
</script>