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
            required></v-text-field>
          <v-text-field
            label="Password"
            :type="'password'"
            v-model="password"
            required></v-text-field>
          <v-btn
                  color="info"
                  @click="auth"
          >Login</v-btn>
          <v-btn
            color="warning"
            @click="() => {
              this.$data.email = '';
              this.$data.password = '';
            }"
          >Clear</v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapMutations } from "vuex";
import axios from "axios";
import { Mutation } from "vuex-class";

@Component({
  name: "Login",
  methods: {
    ...mapMutations(["setAuthenticated"])
  }
})
export default class Login extends Vue {
  email = "";
  password = "";

  @Mutation("setAuthenticated")
  setAuthenticated!: (payload: {}) => void;

  private auth(): void {
    axios
      .post(
        "http://localhost:8080/api/auth",
        {
          email: this.email,
          password: this.password
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(response => {
        localStorage.setItem("SSM-TOKEN", response.headers["ssm-token"]);
        this.setAuthenticated({ authenticated: true });
        this.$router.push("/projects");
      })
      .catch(error => {
        console.log(error);
        localStorage.removeItem("SSM-TOKEN");
      });
  }
}
</script>

<style scoped>
</style>
