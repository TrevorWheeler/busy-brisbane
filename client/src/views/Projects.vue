<template>
  <div class="projects">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          sm6
          offset-sm3
        >
                   <search/>
          <div class="white elevation-2">
    
            <v-toolbar
              flat
              dense
              class="cyan"
              dark
            >
         
              <v-toolbar-title>Projects</v-toolbar-title>
            
            </v-toolbar>
          </div>
          <div
            v-for="(projects, index) in projects"
            :key="index"
          >
            <v-card>
              <v-container
                fluid
                grid-list-md
              >
                <v-layout
                  row
                  wrap
                >
                  <v-flex>
                    <v-card>

                      <v-img
                        v-if="projects.img !== null"
                        :src="projects.img"
                      >
                      </v-img>
                      <v-card-actions>
                        <span
                          class="headline black--text"
                          v-text="projects.title"
                        ></span>
                        <v-spacer></v-spacer>

                        <v-btn
                          icon
                          @click="navigateTo({ name: 'project', params: { projectId: projects.id}})"
                        >
                          <v-icon>remove_red_eye</v-icon>
                        </v-btn>

                        <v-btn icon>
                          <v-icon>favorite</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn
      slot="action"
      class="cyan"
      fixed
      bottom
      right
      fab
      @click="navigateTo({name: 'projects-create'})"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import search from "@/components/Search.vue"
import ProjectsService from "@/services/projectsService";

export default {
  data() {
    return {
      projects: null
    };
  },
  components: {
    search
  },
  async mounted() {
    this.projects = (await ProjectsService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style>
</style>
