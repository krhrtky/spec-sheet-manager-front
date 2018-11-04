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
      <v-btn
        small
        absolute
        top
        right
        fab
        @click="() => this.$router.push('/addProject')"
      >
        <v-icon>add</v-icon>
      </v-btn>

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
          <td>{{ props.item.language }}</td>
          <td>{{ props.item.framework }}</td>
          <td>{{ props.item.middleware }}</td>
          <td>{{ props.item.startDate }}</td>
          <td>{{ props.item.endDate }}</td>
          <td>
          <v-icon
            @click="edit(props.item.id)"
          >
            create
          </v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>
    </template>
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
        { text: "End Date", value: "endDate" },
        { text: "", value: "" }
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

  edit(id: string) {
    // this.$router.push({ path: `project/${this.$data.selected[0].id}/edit` });
    this.$router.push({ path: `project/${id}/edit` });
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
