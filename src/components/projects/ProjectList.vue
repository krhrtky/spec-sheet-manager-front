<template>
  <v-card class="project-list">
    <v-card-title primary-title>
      <h1>Project List</h1>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <template>

      <v-layout row wrap>

      <v-flex offset-xs9 >
          <v-btn
            color="info"
            :disabled="this.$data.selected.length !== 1"
            @click="edit"
          >
            Edit
          </v-btn>
          <v-btn
            color="info"
            :disabled="this.$data.selected.length === 0"
          >
            Print
          </v-btn>
      </v-flex>
      </v-layout>
    </template>

    <v-data-table
      :headers="headers"
      :items="projects"
      :search="search"
      v-model="selected"
      item-key="id"
      select-all
      hide-actions
      class="elevation-1"
    >
      <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
          <span>
          {{ props.header.text }}
        </span>
        </v-tooltip>
      </template>
      <template slot="items" slot-scope="props">
        <tr @click="select(props.item, $event)">

          <td>
            <v-checkbox
              v-model="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td>{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.language }}</td>
          <td class="text-xs-center">{{ props.item.framework }}</td>
          <td class="text-xs-center">{{ props.item.middleware }}</td>
          <td class="text-xs-center">{{ props.item.startDate }}</td>
          <td class="text-xs-center">{{ props.item.endDate }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Action } from "vuex-class";

@Component({
  name: "ProjectList",
  computed: {
    ...mapGetters(["projects"])
  }
})
export default class ProjectList extends Vue {
  @Action("getAllProjects")
  getAllProjects!: () => any;

  data() {
    return {
      search: "",
      selected: [],
      headers: [
        {
          text: "Project Name",
          align: "left",
          value: "name"
        },
        { text: "Language", value: "language" },
        { text: "FrameWork", value: "framework" },
        { text: "Middleware", value: "middleware" },
        { text: "Start Date", value: "startDate" },
        { text: "End Date", value: "endDate" }
      ]
    };
  }

  select(item: any, event: any) {
    if (
      !event.target.classList.contains("v-input--selection-controls__ripple")
    ) {
      if (!this.$data.selected.includes(item)) {
        this.$data.selected.push(item);
      } else {
        this.$data.selected.pop(item);
      }
    }
  }

  edit() {
    this.$router.push({ path: `project/${this.$data.selected[0].id}/edit` });
  }

  created() {
    this.getAllProjects();
  }
}
</script>

<style scoped>
.project-list.v-card {
  margin: 25px 5% 0 5%;
}

.v-list {
  overflow: auto;
  max-height: 500px;
}
</style>
