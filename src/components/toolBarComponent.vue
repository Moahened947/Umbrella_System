<template>
    <div>
      <v-toolbar
        dark
        prominent
        v-model="value"
        color="blue lighten-3"
        mode="shift"
        class="d-lg-none d-xl-none d-xxl-none"
      >


        <v-toolbar-title>UMB-RE System</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon to="/login">
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
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
