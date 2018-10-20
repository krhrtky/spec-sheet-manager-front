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
          <v-btn color="info">Confirm</v-btn>
          <v-btn color="warning">Cancel</v-btn>
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

  @Getter("selectedProject")
  selectedProject!: () => any;
}
</script>

<style scoped>
</style>
