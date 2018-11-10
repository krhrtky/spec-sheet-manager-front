<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    v-model="menu"
    :nudge-right="40"
    :return-value.sync="date"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    max-width="290px"
    min-width="290px"
  >
    <v-text-field
      slot="activator"
      v-model="date"
      :label="title"
      prepend-icon="event"
      readonly
      v-validate="'required'"
      :data-vv-name="title"
      :error-messages="errors.collect(`${this.$props.title}`)"
    ></v-text-field>
    <v-date-picker
      v-model="date"
      type="month"
      no-title
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "MonthPicker",
  inject: ["$validator"],
  props: {
    title: {
      type: String,
      default: "date",
      require: true
    },
    initialDate: {
      type: String,
      default: null,
      require: true
    }
  }
})
export default class MonthPicker extends Vue {
  dictionary = {
    custom: {
      month: {
        required: () => `${this.$props.title} Month can not be empty`
      }
    }
  };

  data() {
    return {
      menu: false,
      modal: false
    };
  }

  get date() {
    return this.$props.initialDate;
  }

  set date(date) {
    if (this.$props.initialDate !== date) {
      this.$emit("input", date);
    }
  }
}
</script>

<style scoped>
.v-menu__content > .v-card {
  margin: initial;
  padding: initial;
}
</style>
