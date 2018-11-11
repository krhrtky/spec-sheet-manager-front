<template>
  <v-alert
    :value="true"
    color="success"
    icon="check_circle"
    outline
  >
    {{message}}
  </v-alert>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Error",
  props: {
    message: {
      type: String,
      default: "error!",
      require: true
    }
  }
})
export default class MonthPicker extends Vue {}
</script>

<style scoped>
</style>
