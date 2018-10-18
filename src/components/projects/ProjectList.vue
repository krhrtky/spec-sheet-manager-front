<template>
  <v-card>
    <v-card-title primary-title>
      <h1>Project List</h1>
    </v-card-title>
    <v-text-field
      append-icon="search"
      placeholder="Keyword"
    />

    <v-list two-line>
      <template
        v-for="project in projects"
      >
        <v-list-tile
          :key="project.id"
          ripple
          @click="select(project.id)"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ project.name }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{ project.languages }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-list-tile-action-text>FROM: {{project.startDate}}</v-list-tile-action-text>
            <v-list-tile-action-text>TO: {{project.endDate}}</v-list-tile-action-text>
          </v-list-tile-action>

        </v-list-tile>
        <v-divider :key="`divider-${project.id}`"/>
      </template>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Getter } from "vuex-class";

@Component({
  name: "ProjectList",
  computed: {
    ...mapGetters(["projects"])
  }
})
export default class ProjectList extends Vue {
  @Getter("projects")
  projects!: () => any;

  select(id: number) {
    this.$router.push({ path: `project/edit/${id}` });
  }
}
</script>

<style scoped>
.v-card {
  height: auto;
}

.v-list {
  overflow: auto;
  max-height: 500px;
}
</style>
