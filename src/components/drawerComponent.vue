<template>
  <div>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail color="blue lighten-3">
        <v-list>
          <v-list-item
            :prepend-avatar="mohaned"
            title="Mohaned Tohami"
            subtitle="Underwriter"
          >
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            to="/"
            title="Dashboard"
            value="Dashboard"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-hand-coin"
            to="/facaltative"
            title="Facaltitave"
            value="Facaltitave"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-note-text"
            title="Treaty"
            value="Treaty"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-note"
            to="/Notes"
            title="Notes"
            :value="true"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-calendar-plus"
            to="/Todo"
            title="Todo"
            :value="true"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-cog"
            to="/settings"
            title="Settings"
            :value="true"
          ></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-list-item
              prepend-icon="mdi-logout"
              to="/Login"
              title="Logout"
              value="login"
            ></v-list-item>
          </div>
        </template>
      </v-navigation-drawer>

      <v-main></v-main>
    </v-layout>
  </div>
</template>
<script setup>
import { ref } from "vue";
import mohaned from "../assets/avatar.png";

const img = mohaned;
const isVisible = ref(true);
</script>
