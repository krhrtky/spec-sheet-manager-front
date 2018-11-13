<template>
  <div>

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
        color="info"
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
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <edit-project
        :selectedProject="this.$data.editProject"
        @close="closeEditWindow"
      ></edit-project>
    </v-dialog>
  </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Action, Getter } from "vuex-class";
import EditProject from "@/components/projects/EditProject.vue";

@Component({
  name: "ProjectList",
  components: {
    EditProject
  },
  computed: {
    ...mapGetters(["projects"])
  }
})
export default class ProjectList extends Vue {
  @Action("getAllProjects")
  getAllProjects!: () => any;

  @Getter("selectedProject")
  selectedProject!: (id: number) => any;

  data() {
    return {
      dialog: false,
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
      ],
      editProjectId: 0,
      editProject: {}
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

  edit(id: number) {
    this.$data.editProject = this.selectedProject(id);
    this.$data.dialog = true;
  }

  created() {
    this.getAllProjects();
  }

  closeEditWindow() {
    this.$data.dialog = false;
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
