<template>
  <div class="register">

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
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>

            <v-form>
              <v-container>
                <v-layout
                  row
                  wrap
                >
                  <v-flex>
                    <v-text-field
                      label="Email"
                      v-model="email"
                    ></v-text-field>
                    <v-text-field
                    type="password"
                      label="Password"
                      v-model="password"
                    ></v-text-field>

                    <v-btn
                      color="primary"
                      @click="login"
                    >Login </v-btn>
                    <v-alert
                      :value="error"
                      type="error"
                      v-html="error"
                      class="white--text"
                    >
                    </v-alert>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>



<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
       const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
         this.$router.push({
          name: 'projects'
        })
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style lang="scss">
.register {
  padding-top: 3em;
}
.error {
  color: red;
}
</style>

