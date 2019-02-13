<template>
  <v-toolbar
    class="mb-2 cyan"
    flat
    dense
    dark
  >
    <v-text-field label="Search by title name." v-model="search">
    </v-text-field>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="scss">
</style>
