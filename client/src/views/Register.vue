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
              <v-toolbar-title>Register</v-toolbar-title>
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
                      @click="register"
                    >Register </v-btn>
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
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
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

