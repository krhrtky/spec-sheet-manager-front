<template>
  <v-layout column wrap>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <h1>
            Login
          </h1>
        </v-card-title>
        <v-form>
          <v-text-field
            label="E-mail"
            v-model="email"
            required
          />
          <v-text-field
            label="Password"
            :type="'password'"
            v-model="password"
            required
          />
          <v-btn
                  color="info"
                  @click="auth"
          >Login</v-btn>
          <v-btn color="warning">Clear</v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Login"
})
export default class Login extends Vue {
  email = "";
  password = "";

  auth() {
    console.log(`email: ${this.email}`);
    console.log(`password: ${this.password}`);
  }
}
</script>

<style scoped>
</style>
