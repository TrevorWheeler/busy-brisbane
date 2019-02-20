<template>
<div>
    <div class="white elevation-2">

            <v-toolbar
              flat
              dense
              class="cyan"
              dark
            >
              <v-toolbar-title>Search</v-toolbar-title>
            </v-toolbar>
          </div>

           
    <v-text-field label="Search for project" v-model="search">
    </v-text-field>

</div>
</template>

<script>
import _ from "lodash"
export default {
  data() {
    return {
      search: ""
    };
  },
  watch: {

    //use lodash debounce to wait 700ms before search query is sent
    search: _.debounce(async function(value) {
      const route = {
        name: 'projects'
      }
      if (this.search !== "") {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),

    // push url query to text field on page refresh
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
};
</script>

<style lang="scss">
</style>
