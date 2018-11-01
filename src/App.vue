<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      clipped="clipped"
      floating="floating"
      v-model="drawer"
      enable-resize-watcher
      temporary
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <router-link :to="{path: item.path}">
            <v-btn color="info">
              {{item.title}}
            </v-btn>
          </router-link>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <v-btn
          slot="activator"
          icon
        >
          <v-icon>more_vert</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile>

            <v-list-tile-title
              v-if="!isAuthenticated"
              @click="() => this.$router.push('/login')"
            >
              Login
            </v-list-tile-title>
            <v-list-tile-title
            v-if="!isAuthenticated"
            @click="() => this.$router.push('/users/new')"
            >
              Sign On
            </v-list-tile-title>
            <v-list-tile-title
              v-if="isAuthenticated"
              @click="() => this.$router.push('/login')"
            >
              logout
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Getter } from "vuex-class";
import VListTile from "vuetify/src/components/VList/VListTile";

@Component({
  name: "App",
  components: { VListTile },
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
})
export default class App extends Vue {
  @Getter("isAuthenticated")
  isAuthenticated!: () => boolean;

  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          path: "/project/new",
          title: "Add Project"
        },
        {
          path: "/projects",
          title: "Projects"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Spec Sheet Manager"
    };
  }
}
</script>

<style>
a {
  text-decoration: none;
}

.v-content__wrap .v-card {
  margin: 25px 20% 0 20%;
  padding: 0 5rem 5rem 5rem;
}
</style>
