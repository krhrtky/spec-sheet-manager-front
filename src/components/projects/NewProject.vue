<template>
  <v-layout column wrap>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <h1>New Project</h1>
        </v-card-title>
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">Input</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">Confirm</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">Result</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <form>
                  <v-text-field
                    label="Project Name"
                    v-model="project.name"
                    v-validate="'required'"
                    data-vv-name="name"
                    :error-messages="errors.collect('name')"
                    required></v-text-field>
                  <month-picker
                    title="Start Date"
                    :initialDate="project.startDate"
                    ref="startDate"
                    @input="date => project.startDate = date"
                  />
                  <month-picker
                    title="End Date"
                    :initialDate="project.endDate"
                    ref="endDate"
                    @input="date => project.endDate = date"
                  />
                  <v-text-field
                    label="Language"
                    v-model="project.language"
                    v-validate="'required'"
                    data-vv-name="language"
                    :error-messages="errors.collect('language')"
                    required></v-text-field>
                  <v-text-field
                    label="FrameWork"
                    v-model="project.framework"
                    v-validate="'required'"
                    data-vv-name="framework"
                    :error-messages="errors.collect('framework')"
                    required></v-text-field>
                  <v-text-field
                    label="Middleware"
                    v-model="project.middleware"
                    v-validate="'required'"
                    data-vv-name="middleware"
                    :error-messages="errors.collect('middleware')"
                    required></v-text-field>
                  <v-textarea
                    auto-grow
                    label="About"
                    v-model="project.about"
                    v-validate="'required'"
                    data-vv-name="about"
                    :error-messages="errors.collect('about')"
                    rows="5"
                  ></v-textarea>
                </form>

                <v-btn
                  color="primary"
                  @click="confirm"
                >
                  Continue
                </v-btn>

                <v-btn
                  color="warning"
                >
                  Cancel
                </v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-form>
                  <v-text-field
                    label="Project Name"
                    v-model="project.name"
                    disabled
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Start Date"
                    v-model="project.startDate"
                    disabled
                    required
                  ></v-text-field>
                  <v-text-field
                    label="End Date"
                    v-model="project.endDate"
                    disabled
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Language"
                    v-model="project.language"
                    required
                    disabled
                  ></v-text-field>
                  <v-text-field
                    label="FrameWork"
                    v-model="project.framework"
                    required
                    disabled
                  ></v-text-field>
                  <v-text-field
                    label="Middleware"
                    v-model="project.middleware"
                    required
                    disabled
                  ></v-text-field>
                  <v-textarea
                    auto-grow
                    label="About"
                    v-model="project.about"
                    rows="5"
                    disabled
                  ></v-textarea>
                </v-form>

                <v-btn
                  color="primary"
                  @click="submit"
                >
                  Continue
                </v-btn>
                <v-btn
                  color="warning"
                  @click="e1 = 1"
                >
                  Back
                </v-btn>

              </v-stepper-content>

              <v-stepper-content step="3">

                  <component v-bind:is="result"></component>

                <v-btn
                  color="primary"
                  @click="() => this.$router.push('/projects')"
                >
                  Return Projects
                </v-btn>

                <v-btn
                  color="warning"
                  @click="e1 = 2"
                >
                  Back
                </v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MonthPicker from "@/components/commons/MonthPicker.vue";
import { Action, Getter } from "vuex-class";
import Progress from "@/components/commons/Progress.vue";
import Success from "@/components/commons/Success.vue";
import Error from "@/components/commons/Error.vue";

@Component({
  name: "NewProject",
  components: {
    MonthPicker,
    Progress,
    Success,
    Error
  }
})
export default class NewProject extends Vue {
  $_veeValidate = {
    validator: "new"
  };
  dictionary = {
    custom: {
      name: {
        required: () => "Name can not be empty"
      },
      language: {
        required: () => "Language can not be empty"
      },
      framework: {
        required: () => "Framework can not be empty"
      },
      middleware: {
        required: () => "Middleware can not be empty"
      },
      about: {
        required: () => "About can not be empty"
      },
      startDate: {
        required: () => "StartDate can not be empty"
      },
      endDate: {
        required: () => "endDate can not be empty"
      }
    }
  };

  data() {
    return {
      valid: false,
      e1: 0,
      result: "Progress",
      project: {
        name: "",
        startDate: "",
        endDate: ""
      }
    };
  }

  @Action("createProject")
  createProject!: (project: any) => void;

  @Getter("getCreateResult")
  getCreateResult!: () => boolean;

  async confirm() {
    const currentFormValid = await this.$validator.validateAll();
    const startDateValid = await (this.$refs
      .startDate as any).$validator.validateAll();
    const endDateValid = await (this.$refs
      .endDate as any).$validator.validateAll();

    if (currentFormValid && startDateValid && endDateValid) {
      this.$data.e1 = 2;
    }
  }
  mounted() {
    this.$validator.localize("en", this.dictionary);
  }

  async submit() {
    this.$data.e1 = 3;
    await this.createProject({ project: this.$data.project });
    this.$data.result = this.getCreateResult ? "Success" : "Error";
  }
}
</script>

<style scoped>
</style>
