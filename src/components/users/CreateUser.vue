<template>
  <v-layout column wrap>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <h1>Sign On</h1>
        </v-card-title>
        <v-form>
          <v-text-field
            label="User Name"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            :type="'password'"
            required
          ></v-text-field>
          <v-text-field
            label="Password Confirmation"
            :type="'password'"
            required></v-text-field>
          <v-btn color="info">Confirm</v-btn>
          <v-btn
            color="warning"
            @click="() => {
              this.$data.email = '';
              this.$data.password = '';
            }"
          >
            Cancel
          </v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "CreateUser"
})
export default class CreateUser extends Vue {}
</script>

<style scoped>
</style>
