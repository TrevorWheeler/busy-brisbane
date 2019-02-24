<template>
  <div class="activity">
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
              <v-toolbar-title>{{activity.title}}</v-toolbar-title>
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
                      v-if="activity.img !== null"
                      :src="activity.img"
                    >
                    </v-img>
                  </v-card>
                  <v-container>
                    <h3>Suburb</h3>
                    <p>{{activity.suburb}}</p>
                    <h3>Description</h3>
                    <p>{{activity.desc}}</p>
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
      @click="navigateTo({name: 'activity-edit', params: {activityId: activity.id}})"
    >
      <v-icon>edit</v-icon>
    </v-btn>
  </div>
</template>

<script>
import ActivitiesService from "@/services/ActivitiesService";
export default {
  data() {
    return {
      activity: {}
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async mounted() {
    const activityId = this.$store.state.route.params.activityId;
    this.activity = (await ActivitiesService.show(activityId)).data;
  }
};
</script>

<style>
</style>
