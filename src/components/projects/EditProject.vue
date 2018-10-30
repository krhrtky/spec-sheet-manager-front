<template>
  <v-layout column wrap>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <h1>Edit Project</h1>
        </v-card-title>
        <v-form>
          <v-text-field
            label="Project Name"
            v-model="selectedProject.name"
            required></v-text-field>
          <month-picker
            title="Start Date"
            :initialDate="selectedProject.startDate"
            @input="date => selectedProject.startDate = date"
            />
          <month-picker
            title="End Date"
            :initialDate="selectedProject.endDate"
            @input="date => selectedProject.endDate = date"
            />
          <v-text-field
            label="Language"
            v-model="selectedProject.language"
            required></v-text-field>
          <v-text-field
            label="FrameWork"
            v-model="selectedProject.framework"
            required></v-text-field>
          <v-text-field
            label="Middleware"
            v-model="selectedProject.middleware"
            required></v-text-field>
          <v-textarea
            auto-grow
            label="About"
            v-model="selectedProject.about"
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
          <router-link :to="{path: '/projects'}">
            <v-btn color="warning">Cancel</v-btn>
          </router-link>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MonthPicker from "@/components/commons/MonthPicker.vue";
import { mapGetters } from "vuex";
import { Action, Getter } from "vuex-class";

@Component({
  name: "EditProject",
  components: {
    MonthPicker
  },
  computed: {
    ...mapGetters(["selectedProject"])
  }
})
export default class EditProject extends Vue {
  projectName = "";

  data() {
    return {
      dialog: false
    };
  }

  @Getter("selectedProject")
  selectedProject!: (updateProject: any) => any;

  @Action("updateProject")
  updateProject!: (updateProject: any) => void;

  submit() {
    this.updateProject({ updateProject: this.selectedProject });
  }
}
</script>

<style scoped>
</style>
