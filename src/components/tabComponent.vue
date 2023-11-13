<template>
  <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation
      v-model="value"
      bg-color="blue lighten-3"
      mode="shift"
      class="d-lg-none d-xl-none d-xxl-none"
    >
      <v-btn to="/dashboard">
        <v-icon>mdi-view-dashboard</v-icon>
        <span>Dashboard</span>
      </v-btn>

      <v-btn to="/facaltative">
        <v-icon>mdi-hand-coin</v-icon>
        <span>Facaltitave</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-note-text</v-icon>
        <span>Treaty</span>
      </v-btn>
      <v-btn to="/settings">
        <v-icon>mdi-cog</v-icon>
        <span>Setteings</span>
      </v-btn>
     </v-bottom-navigation>
  </v-layout>
</template>
<script setup>
import { ref } from "@vue/reactivity";
const value = ref(1);
</script>


<style scoped>
@media (min-width: 600px) and (max-width: 1280px) {

  .overflow-visible {
    overflow-x: auto;
  }
}

@media (max-width: 600px) {
  .d-sm-none {
    display: none !important;
  }
}
</style>
