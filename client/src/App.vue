<template>
  <v-app>
    <v-toolbar fixed app>
     
        <v-toolbar-title class="headline text-uppercase brand"   @click="navigateTo({name: 'home'})">
          <span>Ceramic</span>
          <span class="font-weight-light">Journal</span>
        </v-toolbar-title>
   
      <v-spacer></v-spacer>
      <v-toolbar-items>
         <v-btn
          flat
          @click="navigateTo({name: 'login'})"
        >
          <span>Login</span>
        </v-btn>
        <v-btn
          flat
          @click="navigateTo({name: 'register'})"
        >
          <span>Sign Up</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
};
</script>








<style lang="scss">
.brand {
  cursor:pointer;
}


</style>

