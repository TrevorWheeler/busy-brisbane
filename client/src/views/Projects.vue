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

                      <v-img
                        v-if="project.img !== null"
                        :src="project.img"
                      >
                      </v-img>
                      <v-card-actions>
                        <span
                          class="headline black--text"
                          v-text="project.title"
                        ></span>
                        <v-spacer></v-spacer>

                        <v-btn
                        icon
                          @click="navigateTo({name: 'projects-create'})"
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
import ProjectsService from "@/services/ProjectsService";

// import image2base64 from "image-to-base64";
export default {
  data() {
    return {
      projects: null
    };
  },

  computed: {
    // dataUrl() {
    //   // console.log(this.projects.img)
    //   // return 'data:image/jpeg;base64,' + btoa(
    //   //     new Uint8Array(this.projects.img)
    //   //     .reduce((data, byte) => data + String.fromCharCode(byte), '')
    //   // );
    //   var base64EncodedStr = btoa(
    //     unescape(encodeURIComponent(this.projects[0].img))
    //   );
    //   console.log(base64EncodedStr);
    // }
    // dataUrl(file) {
    //   console.log(file);
    //   var reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onload = function() {
    //     console.log(reader.result);
    //   };
    //   reader.onerror = function(error) {
    //     console.log("Error: ", error);
    //   };
    // }
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
