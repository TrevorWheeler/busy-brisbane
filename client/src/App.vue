<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      dark
      temporary
    >
      <v-list
        class="pt-0"
        dense
      >
        <v-divider light></v-divider>

        <v-list-tile
          @click="navigateTo({name: 'login'})"
          v-if="!$store.state.isUserLoggedIn"
        >
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click="navigateTo({name: 'register'})"
          v-if="!$store.state.isUserLoggedIn"
        >
          <v-list-tile-content>
            <v-list-tile-title>Register</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click="logout"
          v-if="$store.state.isUserLoggedIn"
        >
          <v-list-tile-content>
            <v-list-tile-title>Sign Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      fixed
      app
    >
      <v-toolbar-title
        class="headline text-uppercase brand"
        @click="navigateTo({name: 'home'})"
      >
        <span>Ceramic</span>
        <span class="font-weight-light">Journal</span>
      
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
             <v-btn
          v-if="$store.state.isUserLoggedIn"
          class="hidden-sm-and-down"
          flat
          @click="navigateTo({name: 'projects'})"
        >
          <span>My Projects</span>
        </v-btn>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          class="hidden-sm-and-down"
          flat
          @click="navigateTo({name: 'login'})"
        >
          <span>Login</span>
        </v-btn>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          class="hidden-sm-and-down"
          flat
          @click="navigateTo({name: 'register'})"
        >
          <span>Sign Up</span>
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn"
          class="hidden-sm-and-down"
          flat
          @click="logout"
        >
          <span>Sign Out</span>
        </v-btn>
        <v-btn
          class="hidden-md-and-up"
          icon
          @click.stop="drawer = !drawer"
        >
          <v-icon>more_vert</v-icon>
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
      drawer: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "home"
      })
    }
  }
};
</script>








<style lang="scss">
.brand {
  cursor: pointer;
}

.mobile {
  display: none;
  @media only screen and (min-width: 768px) {
    display: inherit;
  }
}
</style>

