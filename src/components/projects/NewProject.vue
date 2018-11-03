<template>
  <v-layout column wrap>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <h1>New Project</h1>
        </v-card-title>
        <v-form>
          <v-text-field
            label="Project Name"
            v-model="project.name"
            required></v-text-field>
          <month-picker
            title="Start Date"
            :initialDate="project.startDate"
            @input="date => project.startDate = date"
          />
          <month-picker
            title="End Date"
            :initialDate="project.endDate"
            @input="date => project.endDate = date"
          />
          <v-text-field
            label="Language"
            v-model="project.language"
            required></v-text-field>
          <v-text-field
            label="FrameWork"
            v-model="project.framework"
            required></v-text-field>
          <v-text-field
            label="Middleware"
            v-model="project.middleware"
            required></v-text-field>
          <v-textarea
            auto-grow
            label="About"
            v-model="project.about"
            rows="5"
          ></v-textarea>
          <v-dialog v-model="dialog" persistent max-width="290">
            <v-btn slot="activator" color="primary" dark>Done</v-btn>
            <v-card>
              <v-card-title class="headline">Confirm</v-card-title>
              <v-card-text>Do you want to register?</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click.native="dialog = false">Disagree</v-btn>
                <v-btn color="green darken-1" flat @click="submit">Agree</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn color="warning">Cancel</v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MonthPicker from "@/components/commons/MonthPicker.vue";
import { Action } from "vuex-class";

@Component({
  name: "NewProject",
  components: {
    MonthPicker
  }
})
export default class NewProject extends Vue {
  data() {
    return {
      dialog: false,
      project: {
        startDate: "",
        endDate: ""
      }
    };
  }

  @Action("createProject")
  createProject!: (project: any) => void;

  submit() {
    this.createProject({ project: this.$data.project });
  }
}
</script>

<style scoped>
</style>
