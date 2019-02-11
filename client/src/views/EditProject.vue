<template>
  <div class="create-project">
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
              <v-toolbar-title>Edit Project</v-toolbar-title>
            </v-toolbar>

          </div>

          <v-text-field
            label="Title*"
            required
            :rules=[required]
            v-model="project.title"
          ></v-text-field>

          <v-text-field
            type="text"
            label="Description"
            v-model="project.desc"
          ></v-text-field>

          <v-text-field
            type="text"
            label="Clay Type"
            v-model="project.clay"
          ></v-text-field>

          <v-text-field
            type="text"
            label="Clay Additives"
            v-model="project.additives"
          ></v-text-field>

          <img
            :src="project.img"
            height="150"
          />
          <v-text-field
            label="Select Image"
            @click='pickFile'
            v-model='imageName'
            prepend-icon='attach_file'
          ></v-text-field>
          <input
            type="file"
            style="display: none"
            ref="image"
            accept="image/*"
            @change="onFilePicked"
          >

          <v-alert
            :value="error"
            type="error"
            v-if="error"
            class="white--text"
          >{{error}}
          </v-alert>
          <v-btn
            :disabled="!formIsValid"
            color="primary"
            @click="save"
          >Save Project</v-btn>

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
      project: {
        title: null,
        img: null,
        clay: null,
        weight: null,
        additives: null,
        length: null,
        height: null,
        depth: null,
        slip: null,
        slipDesc: null,
        dryStartDate: null,
        dryEndDate: null,
        dryConditions: null,
        bisqueDesc: null,
        glazeType: null,
        glazeApplication: null,
        glazeProcess: null,
        FiringDesc: null
      },

      imageName: "",
      imageUrl: "",
      imageFile: "",
      error: null,
      required: value => !!value || "Required."
    };
  },
  computed: {
    formIsValid() {
      return this.project.title !== null;
    }
  },

  async mounted() {
    try {
      const projectId = this.$store.state.route.params.projectId;
      this.project = (await ProjectsService.show(projectId)).data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async save() {
      if (!this.formIsValid) {
        return;
      }
       const projectId = this.$store.state.route.params.projectId;
      try {
        await ProjectsService.put(this.project);
        this.$router.push({
          name: "project",
          params: {
            projectId: projectId
          }
        });
      } catch (err) {
        console.log(err);
      }
    },

    pickFile() {
      this.$refs.image.click();
    },

    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          console.log(reader.result);
          this.project.img = reader.result;
        };
        reader.onerror = function(error) {
          console.log("Error: ", error);
        };
      }
    }
  }
};
</script>

<style lang="scss">
</style>


