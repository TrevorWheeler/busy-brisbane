<template>
  <div class="projects">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          sm6
          offset-sm3
        >

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
            v-for="(project, index) in projects"
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
                      <v-img v-if="project.img === ''" :src="project.img">

                      </v-img>

                      <v-card-actions>
                        <span
                          class="headline black--text"
                          v-text="project.title"
                        ></span>
                        <v-spacer></v-spacer>
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
  </div>
</template>

<script>
import ProjectsService from "@/services/projectsService";
export default {
  data() {
    return {
      projects: null
    };
  },
  async mounted() {
    this.projects = (await ProjectsService.index()).data;
  }
};
</script>

<style>
</style>
