<template>
  <div class="create-activity">
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
              <v-toolbar-title>Create Activity</v-toolbar-title>
            </v-toolbar>

          </div>

          <v-text-field
            label="Title*"
            required
            :rules=[required]
            v-model="activity.title"
          ></v-text-field>

          <v-text-field
            type="text"
            label="Suburb"
            v-model="activity.suburb"
          ></v-text-field>

          <v-text-field
            type="text"
            label="Description"
            v-model="activity.desc"
          ></v-text-field>

          <img
            :src="activity.img"
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
            @click="create"
          >Create</v-btn>

        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import ActivitiesService from "@/services/ActivitiesService";

export default {
  data() {
    return {
      activity: {
        title: null,
        img: null,
        desc: null,
        suburb: null
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
      return this.activity.title !== null;
    }
  },
  methods: {
    async create() {
      if (!this.formIsValid) {
        return;
      }
      try {
        await ActivitiesService.post(this.activity);
        this.$router.push({
          name: "activities"
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
          this.activity.img = reader.result;
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


