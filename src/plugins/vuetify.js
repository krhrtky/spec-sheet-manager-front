import Vue from "vue";
import {
  transitions,
  VApp,
  VBtn,
  VCard,
  VCheckbox,
  VDataTable,
  VDatePicker,
  VDialog,
  VDivider,
  VFooter,
  VForm,
  VGrid,
  VIcon,
  VInput,
  VList,
  VMenu,
  VNavigationDrawer,
  VTextarea,
  VTextField,
  VToolbar,
  VTooltip,
  Vuetify
} from "vuetify";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VForm,
    VTextField,
    VCard,
    VMenu,
    VDatePicker,
    VTextarea,
    VDivider,
    VInput,
    VDataTable,
    VTooltip,
    VDialog,
    VCheckbox
  }
});
