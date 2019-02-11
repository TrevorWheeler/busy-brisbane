<template>
  <div class="project">
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
              <v-toolbar-title>{{project.title}}</v-toolbar-title>
            </v-toolbar>
          </div>

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

             

                  <v-card class="mb-2">
                    <v-img
                      v-if="project.img !== null"
                      :src="project.img"
                    >
                    </v-img>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>favorite</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-container>
                  <h3 >Description</h3>
                  <p>{{project.desc}}</p>
                   <h3 >Clay Type</h3>
                  <p>{{project.desc}}</p>
                   <h3 >Clay Additives</h3>
                  <p>{{project.desc}}</p>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>

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
      @click="navigateTo({name: 'project-edit', params: {projectId: project.id}})"
    >
      <v-icon>edit</v-icon>
    </v-btn>
  </div>
</template>

<script>
import ProjectsService from "@/services/projectsService";
export default {
  data() {
    return {
      project: {}
    };
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route) 
    }
  },
  async mounted() {
    const projectId = this.$store.state.route.params.projectId;
    this.project = (await ProjectsService.show(projectId)).data;
  }
};
</script>

<style>
</style>
