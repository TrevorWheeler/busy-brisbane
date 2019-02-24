<template>
  <div class="home">
    <v-container class="intro">
      <v-layout>
        <v-flex
          xs12
          sm6
          offset-sm3
        >
          <h1 class="text-xs-center"> Welcome to Busy Brisbane. </h1>
          <h2 class="text-xs-center">A place to find and share activities in Brisbane.</h2>
          <div class="intro-links mt-2">
            <div class="content">
              <router-link to="/login">
                <v-btn color="success">login.</v-btn>
              </router-link>
              <router-link to="/register">
                <v-btn color="info">register </v-btn>
              </router-link>

            </div>
          </div>
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
.intro-links {
  display: flex;
  justify-content: center;
}
a {
  text-decoration: none;
}
</style>

