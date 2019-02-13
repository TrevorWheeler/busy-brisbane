<template>
  <div class="home">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          sm6
          offset-sm3
        >
          <h1> Welcome to Ceramic Journal </h1>
          <p> Please <router-link to="/register"> register </router-link> or <router-link to="/login"> login.</router-link>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
</style>

