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
            required
          />
          <month-picker title="Start Date" :initialDate="selectedProject.startDate"/>
          <month-picker title="End Date" :initialDate="selectedProject.endDate"/>
          <v-text-field
            label="Languages"
            v-model="selectedProject.languages"
            required
          />
          <v-text-field
            label="FrameWorks"
            v-model="selectedProject.frameworks"
            required
          />
          <v-text-field
            label="Middlewares"
            v-model="selectedProject.middlewares"
            required
          />
          <v-textarea
            auto-grow
            label="Description"
            v-model="selectedProject.description"
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
                <v-btn color="green darken-1" flat @click.native="dialog = false">Agree</v-btn>
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
import { Getter } from "vuex-class";

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
  selectedProject!: () => any;
}
</script>

<style scoped>
</style>
