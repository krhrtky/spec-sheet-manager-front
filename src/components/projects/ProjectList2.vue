<template>
  <v-card>
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

    <v-data-table
      :headers="headers"
      :items="projects"
      :search="search"
      v-model="selected"
      item-key="id"
      select-all
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
        <tr @click="select(props.item.id)">

          <td>
            <v-checkbox
              v-model="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td>{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.languages }}</td>
          <td class="text-xs-left">{{ props.item.frameworks }}</td>
          <td class="text-xs-left">{{ props.item.middlewares }}</td>
          <td class="text-xs-left">{{ props.item.startDate }}</td>
          <td class="text-xs-left">{{ props.item.endDate }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  name: "ProjectList",
  computed: {
    ...mapGetters(["projects"])
  }
})
export default class ProjectList extends Vue {
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
        { text: "Languages", value: "languages" },
        { text: "FrameWorks", value: "frameworks" },
        { text: "Middlewares", value: "middlewares" },
        { text: "Start Date", value: "startDate" },
        { text: "End Date", value: "endDate" }
      ]
    };
  }

  select(id: number) {}
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
