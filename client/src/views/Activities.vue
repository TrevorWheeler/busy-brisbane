<template>
  <div class="activities">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          sm6
          offset-sm3
        >
          <search class="mb-4" />
          <div class="white elevation-2">

            <v-toolbar
              flat
              dense
              class="cyan"
              dark
            >
              <v-toolbar-title>Activities</v-toolbar-title>
            </v-toolbar>
          </div>
          <div
            v-for="(activity, index) in activities"
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
                        v-if="activity.img !== null"
                        :src="activity.img"
                        @click="navigateTo({ name: 'activity', params: { activityId: activity.id}})"
                      >
                      </v-img>
                      <v-card-actions>
                        <span
                          @click="navigateTo({ name: 'activity', params: { activityId: activity.id}})"
                          class="headline black--text activityTitle"
                          v-text="activity.title"
                        ></span>
                        <v-spacer></v-spacer>
                        <v-btn
                          icon
                          @click="navigateTo({ name: 'activity', params: { activityId: activity.id}})"
                        >
                          <v-icon>remove_red_eye</v-icon>
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
      @click="navigateTo({name: 'activities-create'})"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import search from "@/components/Search.vue";
import ActivitiesService from "@/services/ActivitiesService";

export default {
  data() {
    return {
      activities: null
    };
  },
  components: {
    search
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },

  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.activities = (await ActivitiesService.index(value)).data;
      }
    }
  }
};
</script>

<style>
.v-responsive__content {
  cursor: pointer;
}

.activityTitle {
  cursor: pointer;
}
</style>
